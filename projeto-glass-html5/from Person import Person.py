from Person import Person

class Player(Person):
  def __init__(self, name, age, cpf, game):
      super().__init__(name, age, cpf)
      self.game = game

player1 = Player('Jadson', 35, 12345678910, 'League of Rage')