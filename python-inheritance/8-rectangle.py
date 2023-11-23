#!/usr/bin/python3

class Rectangle:
    __nb_instances = 0

    def __init__(self, width, height):
        self._width = width
        self._height = height
        self.integer_validator(self._width)
        self.integer_validator(self._height)
        self.id = Rectangle.__nb_instances
        Rectangle.__nb_instances += 1

    def area(self):
        return self._width * self._height

    @staticmethod
    def integer_validator(value):
        if not isinstance(value, int) or value <= 0:
            raise TypeError('Value must be a positive integer')

r = Rectangle(3, 5)

print(r)
print(dir(r))

try:
    print("Rectangle: {} - {}".format(r._width, r._height))
except Exception as e:
    print("[{}] {}".format(e.__class__.__name__, e))

try:
    r2 = Rectangle(4, True)
except Exception as e:
    print("[{}] {}".format(e.__class__.__name__, e))
