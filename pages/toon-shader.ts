import {
  Engine,
  Scene,
  ArcRotateCamera,
  MeshBuilder,
  Vector3,
  Color3,
  Color4,
  ShaderMaterial
} from '@babylonjs/core'

const canvas = document.querySelector('canvas')

const engine = new Engine(canvas, true)

const scene = new Scene(engine)
scene.clearColor = Color4.FromHexString('#12345678')

const camera = new ArcRotateCamera('camera', Math.PI / 3,  Math.PI / 4, 10, Vector3.Zero(), scene)
camera.lowerRadiusLimit = 5
camera.upperRadiusLimit = 20
camera.attachControl(canvas, true)

// ref: https://www.smashingmagazine.com/2016/11/building-shaders-with-babylon-js/
const vertexSource = `
  precision highp float;

  attribute vec3 position;
  attribute vec3 normal;
  attribute vec2 uv;

  uniform mat4 world;
  uniform mat4 worldViewProjection;

  varying vec3 vPositionW;
  varying vec3 vNormalW;
  varying vec2 vUV;

  void main(void) {
    vec4 outPosition = worldViewProjection * vec4(position, 1.0);
    gl_Position = outPosition;

    vPositionW = vec3(world * vec4(position, 1.0));
    vNormalW = normalize(vec3(world * vec4(normal, 0.0)));

    vUV = uv;
  }
`

const fragmentSource = `
  precision highp float;

  varying vec3 vPositionW;
  varying vec3 vNormalW;
  varying vec2 vUV;

  uniform vec3 vLightPosition;
  uniform vec3 vColor;

  void main(void) {
    float ToonThresholds[2];
    ToonThresholds[0] = 0.8;
    ToonThresholds[1] = 0.2;

    float ToonBrightnessLevels[3];
    ToonBrightnessLevels[0] = 1.0;
    ToonBrightnessLevels[1] = 0.8;
    ToonBrightnessLevels[2] = 0.5;

    vec3 lightVectorW = normalize(vLightPosition - vPositionW);
    float diffuse = max(0.0, dot(vNormalW, lightVectorW));

    vec3 color = vColor;

    if (diffuse > ToonThresholds[0]) {
      color *= ToonBrightnessLevels[0];
    } else if (diffuse > ToonThresholds[1]) {
      color *= ToonBrightnessLevels[1];
    } else {
      color *= ToonBrightnessLevels[2];
    }

    gl_FragColor = vec4(color, 1.0);
  }
`

const torusKnot = MeshBuilder.CreateTorusKnot('torusKnot', { radius: 1, tube: 0.2, radialSegments: 256, tubularSegments: 32, q: 4, p: 3 }, scene)
const torusKnotMaterial = new ShaderMaterial('torusKnotMaterial', scene, { vertexSource, fragmentSource }, {
  attributes: ['position', 'normal', 'uv'],
  uniforms: ['world', 'worldView', 'worldViewProjection'],
})
torusKnot.position = new Vector3(0, 0, 0)
torusKnot.material = torusKnotMaterial

let t = 0.0
const lightPosition = new Vector3(5, 10, 10)
const color = new Color3(0, 0, 0)

engine.runRenderLoop(() => {
  t += 0.01
  lightPosition.x = 5 * Math.sin(t)
  lightPosition.y = 10 * Math.cos(t)

  Color3.HSVtoRGBToRef((t * 10) % 360, 1.0, 1.0, color)

  torusKnotMaterial.setVector3('vLightPosition', lightPosition)
  torusKnotMaterial.setColor3('vColor', color)

  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
