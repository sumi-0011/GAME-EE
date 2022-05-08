export const ROUTES = Object.freeze({
  DYNO: '/game/dyno',
  SNAKE: '/game/snake',
  MEMORY: '/game/memory',
});

export const SNAKE_GAME = Object.freeze({
  // 캔버스
  CANVAS_WIDTH: 360,
  CANVAS_HEIGHT: 400,

  // 단위
  SNAKE_BODY_WIDTH_UNIT: 10,
  SNAKE_BODY_HEIGHT_UNIT: 5,

  // 색
  SNAKE_BODY_COLOR: '#f5046d',
  FOOD_COLOR: '#676FA3',

  // 뱀 방향
  SNAKE_LEFT_DIRECTION: 'LEFT',
  SNAKE_RIGHT_DIRECTION: 'RIGHT',
  SNAKE_UP_DIRECTION: 'UP',
  SNAKE_DOWN_DIRECTION: 'DOWN',
  SNAKE_STOP: 'STOP',
});
