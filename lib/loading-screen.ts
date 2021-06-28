import { ILoadingScreen } from '@babylonjs/core'

export class LoadingScreen implements ILoadingScreen {
  public loadingUIBackgroundColor: string = '#fff'
  public loadingUIText: string = ''

  public displayLoadingUI() {
    return null
  }

  public hideLoadingUI() {
    return null
  }
}
