import { MousePointer } from "../core/mousePointer";
import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _h:Array<number> = [0,1,2,3,4,5,6,7,8,9]

  constructor(opt:any) {
    super(opt)
  }

  protected _update():void {
    super._update();

    const mx = MousePointer.instance.easeNormal.x
    const my = MousePointer.instance.easeNormal.y

    const txtNum = 100
    const sp = ~~(Util.map(mx, 0, txtNum, -1, 1))
    let txt = ''
    const range = Util.map(Math.abs(mx - 0), 0, 5, 0, 0.5)
    const y = this._h[~~(Util.map(my, this._h.length, 0, -1, 1))]
    for (let i = 0; i < txtNum; i++) {
      txt += (Math.abs(i - sp) < range) ? y : 0
    }
    this.el.innerHTML = txt
  }
}







