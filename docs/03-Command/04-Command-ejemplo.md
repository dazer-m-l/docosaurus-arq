# Ejemplo del Patrón Command

Un sistema de control remoto para dispositivos electrónicos. Este control remoto puede ejecutar varias acciones como encender o apagar dispositivos y ajustar el volumen. Cada acción se encapsula como un comando.

```python
from abc import ABC, abstractmethod

# Interfaz del Comando
class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

    @abstractmethod
    def undo(self):
        pass

# Receptor
class Television:
    def turn_on(self):
        print("Televisión encendida.")

    def turn_off(self):
        print("Televisión apagada.")

    def volume_up(self):
        print("Volumen aumentado.")

    def volume_down(self):
        print("Volumen disminuido.")

# Comandos Concretos
class TurnOnCommand(Command):
    def __init__(self, television: Television):
        self.television = television

    def execute(self):
        self.television.turn_on()

    def undo(self):
        self.television.turn_off()

class TurnOffCommand(Command):
    def __init__(self, television: Television):
        self.television = television

    def execute(self):
        self.television.turn_off()

    def undo(self):
        self.television.turn_on()

class VolumeUpCommand(Command):
    def __init__(self, television: Television):
        self.television = television

    def execute(self):
        self.television.volume_up()

    def undo(self):
        self.television.volume_down()

class VolumeDownCommand(Command):
    def __init__(self, television: Television):
        self.television = television

    def execute(self):
        self.television.volume_down()

    def undo(self):
        self.television.volume_up()

# Invocador
class RemoteControl:
    def __init__(self):
        self.history = []

    def press_button(self, command: Command):
        command.execute()
        self.history.append(command)

    def press_undo(self):
        if self.history:
            last_command = self.history.pop()
            last_command.undo()
        else:
            print("No hay comandos para deshacer.")

# Uso del Patrón Command
if __name__ == "__main__":
    tv = Television()

    # Crear comandos
    turn_on = TurnOnCommand(tv)
    turn_off = TurnOffCommand(tv)
    volume_up = VolumeUpCommand(tv)
    volume_down = VolumeDownCommand(tv)

    # Crear invocador (control remoto)
    remote = RemoteControl()

    # Ejecutar comandos
    remote.press_button(turn_on)
    remote.press_button(volume_up)
    remote.press_button(volume_down)
    remote.press_button(turn_off)

    # Deshacer comandos
    remote.press_undo()
    remote.press_undo()
    remote.press_undo()

```
Salida esperada

```
Televisión encendida.
Volumen aumentado.
Volumen disminuido.
Televisión apagada.
Televisión encendida.
Volumen aumentado.
Volumen disminuido.

```
Este ejemplo muestra cómo el patrón Command puede encapsular acciones, mantener un historial de operaciones y desacoplar al cliente del receptor, proporcionando flexibilidad y facilidad de mantenimiento.
