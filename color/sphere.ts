import './color/Green'
import './color/Blue'
import './color/Red'
import './color/anti'
void function SpherePoint(r: number, theta: number, fai: number):
    { x: number, y: number, z: number,T:number} {
    let x = r * Math.sin(theta) * Math.cos(fai)
    let y = r * Math.sin(theta) * Math.sin(fai)
    let z = r * Math.cos(fai)
    let T = r * Math.sin(theta)
    return { x, y, z, T}
}
void function xyz(){
    let x = Red
    let y = Green
    let z = Blue
    let T = anti
    return  [x, y, z,T]
}
void function SphereRadius(x:number, y:number, z:number):[SphereRadiusx:number, SphereRadiusy:number, SphereRadiusz:number] {
    const SphereRadiusx = Math.sin(x) + Math.cos(y) + Math.sin(screenX) * Math.cos(screenY)
    const SphereRadiusy = Math.sin(y) + Math.cos(x) + Math.sin(screenY) * Math.cos(screenX)
    const SphereRadiusz = Math.sin(z) + Math.cos(y)
    return [SphereRadiusx, SphereRadiusy, SphereRadiusz]
}
void function RGB(){
    this.x = Red
    this.y = Green
    this.z = Blue
    this.t = anti
}
