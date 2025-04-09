interface Alkane {
    carbonCount: number;
    hydrogenCount: number;
}
class C1H4 implements Alkane {
    readonly carbonCount: number = 1;
    readonly hydrogenCount: number = 4;
}
class C5H8 implements Alkane {
    readonly carbonCount: number = 5;
    readonly hydrogenCount: number = 8;
}
class C17H36 implements Alkane {
    readonly carbonCount: number = 17;
    readonly hydrogenCount: number = 36;
}
void function *generateAlkyne(){
    yield new C1H4()
    yield new C5H8()
    yield new C17H36()
}
