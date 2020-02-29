
// special case: just mars

function distanceSquare(x,y, w, v){
  return (x -w)**2 + (y - v)**2
}

function norm_squared(x,y){ return distanceSquare(x,y,0,0); }


function update_position(current_x, current_y, delta_x, delta_y, bodies){

  bodies.forEach((el, index) => {
    if (el.name != current_body.name)
    {
      distanceSquared = distanceSquare(el.position_x, el.position_y, current_body.position_x, current_body.position_y)
      force_x += gravityConst * el.mass * current_body.mass * (el.position_x - current_body.position_x) / (distanceSquared**1.5)
      force_y += gravityConst * el.mass * current_body.mass * (el.position_y - current_body.position_y) / (distanceSquared**1.5)
    }
  }
  )

}

function compute_force(current_body, bodies) {
  let force_x = 0
  let force_y = 0

  let distanceSquared = 0;

  bodies.forEach((el, index) => {
    if (el.name != current_body.name)
    {
      distanceSquared = distanceSquare(el.position_x, el.position_y, current_body.position_x, current_body.position_y)
      force_x += gravityConst * el.mass * current_body.mass * (el.position_x - current_body.position_x) / (distanceSquared**1.5)
      force_y += gravityConst * el.mass * current_body.mass * (el.position_y - current_body.position_y) / (distanceSquared**1.5)
    }
  }
  )

  return [force_x, force_y]

}
