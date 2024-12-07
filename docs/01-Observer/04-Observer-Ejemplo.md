# Ejemplo del Patrón Observer
El siguiente ejemplo muestra la implementación del **Patrón Observer** en Python, donde un sujeto notifica a los observadores cuando su estado cambia.

```python
# Definición del sujeto (Observable)
class Subject:
    def __init__(self):
        self._observers = []  # Lista de observadores
        self._state = None

    def add_observer(self, observer):
        self._observers.append(observer)

    def remove_observer(self, observer):
        self._observers.remove(observer)

    def notify_observers(self):
        for observer in self._observers:
            observer.update(self)

    def set_state(self, state):
        self._state = state
        self.notify_observers()

    def get_state(self):
        return self._state
```

## Ejemplo de observadores concretos
```python
class ConcreteObserverA(Observer):
    def update(self, subject):
        print(f"ConcreteObserverA: El estado del sujeto es {subject.get_state()}")

class ConcreteObserverB(Observer):
    def update(self, subject):
        print(f"ConcreteObserverB: El estado del sujeto es {subject.get_state()}")
```


## Uso del patrón Observer
```python 
subject = Subject()
observer_a = ConcreteObserverA()
observer_b = ConcreteObserverB()

subject.add_observer(observer_a)
subject.add_observer(observer_b)
```