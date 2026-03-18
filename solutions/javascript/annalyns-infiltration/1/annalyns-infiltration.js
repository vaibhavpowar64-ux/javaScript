// Fast attack is possible only when knight is sleeping
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

// You can spy if ANYONE is awake
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

// You can signal prisoner only if:
// archer is sleeping AND prisoner is awake
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

// Free prisoner logic:
// 1. If dog is present → you can free if archer is asleep
// 2. If no dog → prisoner must be awake AND both knight & archer asleep
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent) {
    return !archerIsAwake;
  }

  return !knightIsAwake && !archerIsAwake && prisonerIsAwake;
}