import { fork } from "redux-saga/effects";
import { watcherMusicSaga } from "./musicSaga";
import { watcherUserMusicSaga } from "./userMusicSaga";

export function* root() {
	yield fork(watcherMusicSaga)
	yield fork(watcherUserMusicSaga)
}