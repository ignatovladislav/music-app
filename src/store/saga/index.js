import { fork } from "redux-saga/effects";
import { watcherMusicSaga } from "./musicSaga";

export function* root() {
	yield fork(watcherMusicSaga)
	}