package dio.inter.bootcamp;

class Main {
    public static void main(String[] args) {

        Carro carro1 = new Carro();

        carro1.setModelo("Uno");
        carro1.setCor("Preto");
        carro1.setCapacidadeTanque(50);

        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCor());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println(carro1.totalValorTanque(5.48));

        Carro carro2 = new Carro("Mercedez Bens Classe C", "Branco", 66);

        System.out.println("\n" + carro2.getModelo());
        System.out.println(carro2.getCor());
        System.out.println(carro2.getCapacidadeTanque());
        System.out.println(carro2.totalValorTanque(5.48));
        
    }
    
}
