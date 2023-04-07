package dio.inter.bootcamp;

class Carro {
    String modelo;
    String cor;
    int capacidadeTanque;

    Carro() {

    }

    Carro(String modelo, String cor, int capacidadeTanque) {
        this.modelo = modelo;
        this.cor = cor;
        this.capacidadeTanque = capacidadeTanque;
    }

    void setCor(String cor) {
        this.cor = cor;
    }

    String getCor () {
        return cor;
    }

    void setModelo(String modelo) {
        this.modelo = modelo;
    }

    String getModelo() {
        return modelo;
    }

    void setCapacidadeTanque (int capacidadeTanque) {
        this.capacidadeTanque = capacidadeTanque;
    }

    int getCapacidadeTanque () {
        return capacidadeTanque;
    }

    double totalValorTanque (double valorCombustível){
        return capacidadeTanque * valorCombustível;        
    }
}
