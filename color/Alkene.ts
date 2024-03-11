interface Alkene {
    carbonCount: number;
    hydrogenCount: number;
}
class C2H2 implements Alkene {
    readonly carbonCount: number = 2
    readonly hydrogenCount: number = 2
}

class C4H2 implements Alkene {
    readonly carbonCount: number = 4
    readonly hydrogenCount: number = 2
}

class C6H2 implements Alkene {
    readonly carbonCount: number = 6
    readonly hydrogenCount: number = 2
}
void function *generateAlkynes(){
    yield new C2H2()
    yield new C4H2()
    yield new C6H2()
}

