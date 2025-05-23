interface Alkene {
    carbonCount: number;
    hydrogenCount: number;
}
class C2H4 implements Alkene {
    readonly carbonCount: number = 2;
    readonly hydrogenCount: number = 4;
}
class C6H8 implements Alkene {
    readonly carbonCount: number = 6;
    readonly hydrogenCount: number = 8;
}
class C14H12 implements Alkene {
    readonly carbonCount: number = 14;
    readonly hydrogenCount: number = 12;
}
void function *generateAlkenes(){
    yield new C2H4()
    yield new C6H8()
    yield new C14H12()
}
