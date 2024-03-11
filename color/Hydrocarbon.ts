import './color.java'
import './sphere.ts'
import './tetrahedron.ts'
const c =299792458
interface Hydrocarbon {
    carbonCount: number;
    hydrogenCount: number;
}
class C1H4 implements Hydrocarbon {
    readonly carbonCount: number = 1
    readonly hydrogenCount: number = 4
}

class C5H8 implements Hydrocarbon {
    readonly carbonCount: number = 5
    readonly hydrogenCount: number = 8
}
class C13H24 implements Hydrocarbon {
    readonly carbonCount: number = 13
    readonly hydrogenCount: number = 24
}
void function Hydrocarbons(){
    return [C1H4,C5H8,C13H24]
}
console.log(c)

