# Ejemplo del Patrón Strategy
Supongamos que estamos desarrollando una aplicación que calcula el costo de transporte dependiendo del medio seleccionado (envío terrestre, aéreo o marítimo). Cada tipo de transporte utiliza un algoritmo diferente para calcular el costo.


```python
from abc import ABC, abstractmethod

# Interfaz de Estrategia
class ShippingStrategy(ABC):
    @abstractmethod
    def calculate_cost(self, weight: float) -> float:
        pass

# Estrategias concretas
class GroundShipping(ShippingStrategy):
    def calculate_cost(self, weight: float) -> float:
        return weight * 1.5  # Tarifa por kilogramo

class AirShipping(ShippingStrategy):
    def calculate_cost(self, weight: float) -> float:
        return weight * 3.0  # Tarifa por kilogramo

class SeaShipping(ShippingStrategy):
    def calculate_cost(self, weight: float) -> float:
        return weight * 1.0  # Tarifa por kilogramo

# Contexto
class ShippingCostCalculator:
    def __init__(self, strategy: ShippingStrategy):
        self.strategy = strategy

    def set_strategy(self, strategy: ShippingStrategy):
        self.strategy = strategy

    def calculate(self, weight: float) -> float:
        return self.strategy.calculate_cost(weight)

# Uso del patrón Strategy
if __name__ == "__main__":
    weight = 10.0  # Peso del paquete en kilogramos

    # Estrategia de envío terrestre
    calculator = ShippingCostCalculator(GroundShipping())
    print(f"Costo de envío terrestre: {calculator.calculate(weight)}")

    # Cambiando a envío aéreo
    calculator.set_strategy(AirShipping())
    print(f"Costo de envío aéreo: {calculator.calculate(weight)}")

    # Cambiando a envío marítimo
    calculator.set_strategy(SeaShipping())
    print(f"Costo de envío marítimo: {calculator.calculate(weight)}")
```

Salida esperada

```python
Costo de envío terrestre: 15.0
Costo de envío aéreo: 30.0
Costo de envío marítimo: 10.0
```
Este ejemplo implementa el patrón Strategy para calcular el costo de envío utilizando diferentes medios de transporte: terrestre, aéreo y marítimo.
