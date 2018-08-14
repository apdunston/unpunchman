let STATES = require('./boxerStates');
let FRAMES = {};
FRAMES[STATES.IDLE] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_009.png'
]; 
FRAMES[STATES.PUNCH_LEFT] = [
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_000.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_001.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_002.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_003.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_004.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_005.png"      
];
FRAMES[STATES.PUNCH_RIGHT] = [
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_000.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_001.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_002.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_003.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_004.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_005.png"      
];
FRAMES[STATES.BLOCK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_009.png'    
];
FRAMES[STATES.DIZZY] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_007.png'
];
FRAMES[STATES.HURT] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_007.png'
];
FRAMES[STATES.KO] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_009.png'   
];
FRAMES[STATES.PUNCH_UP] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_006.png'    
];
FRAMES[STATES.WALK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_009.png'
];
FRAMES[STATES.WALK_BACK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_009.png'
];
FRAMES[STATES.STOP] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_000.png',
];
FRAMES[STATES.OK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_009.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_000.png'   
];

module.exports = FRAMES