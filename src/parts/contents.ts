import { Color } from "three";
import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    const max = this.qsAll('.js-item').length
    this.qsAll('.js-item').forEach((el:HTMLElement, i:number) => {
      new Item({
        el: el,
      })

      const w = Util.map(max - i, 0, 1, 0, max)
      const col = new Color(w,w,w)
      el.style.color = col.getStyle()
    })
  }

  protected _update():void {
    super._update()
  }
}