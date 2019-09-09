import { fork, spawn, all, call } from "redux-saga/effects";
import { watcherMusicSaga } from "./musicSaga";
import { watcherUserMusicSaga } from "./userMusicSaga";

export function* root() {
	yield fork(watcherMusicSaga)
	yield fork(watcherUserMusicSaga)
	// yield fork(watcherUserMusicSaga)
	// const sagas = [
	// 	watcherMusicSaga,
	// 	watcherUserMusicSaga,
	// ];
	
	//   yield all(sagas.map(saga =>
	// 	spawn(function* () {
	// 	  while (true) {
	// 		try {
	// 		  yield call(saga)
	// 		  break
	// 		} catch (e) {
	// 		  console.log(e)
	// 		}
	// 	  }
	// 	}))
	//   );
}
// }