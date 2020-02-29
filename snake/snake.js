//var beautify_js = require('js-beautify')

var snake = (function () {

  var previous_direction = [1, 0];
  var body = [[1, 2], [1, 1], [1, 0]];
  var body_length = body.length;

  var food_position = [10, 15]
  var highscore = []

  return {

    set_tmp_highscore() {
;
    },

    check_loss: function (myHead) {
      if (check_array_array_identity(body.slice(1, body_length-1), myHead ))
        return true;

      if ((myHead[0] < 0) || myHead[0] >= block_count)
        return true;
      if ((myHead[1] < 0) || myHead[1] >= block_count)
        return true



      return false

    },

    generate_food: function () {
      while (true) {
        rnd_x = getRndInteger(0, block_count);
        rnd_y = getRndInteger(0, block_count);

        if (check_array_array_identity(body, [rnd_x, rnd_y]))
          continue;
        food_position = [rnd_x, rnd_y]
        return food_position;
      }
    },


    move_body: function (direction) {

      if (check_array_identity(direction, [-previous_direction[0], -previous_direction[1]]))
        return this.move_body(previous_direction);

      previous_direction = direction


      projected_head = [
        body[body_length - 1][0] + direction[0],
        body[body_length - 1][1] + direction[1]]

      if (this.check_loss(projected_head)) {
        loss_condition = true;
        return this
      }

      if (check_array_identity(projected_head, food_position)) {
        body.push(food_position);
        this.generate_food();
        ++body_length;
      }
      else {
        for (var k = 0; k < body_length - 1; ++k) {
          body[k][0] = body[k + 1][0];
          body[k][1] = body[k + 1][1];
        }

        body[body_length - 1] = projected_head
      }
      return this;
    },

    get_body: () => {return body;},



    get_food_position: () => {return food_position}
  }
}
)
