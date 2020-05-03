import { runSaga } from 'redux-saga';
import * as api from '../../api'
import { fetchSongs, fetchSongsSuccess } from '../../actions/song'

describe("post saga", () => {
	it("should handle successfully fetching posts", async () => {
        const dispatchedActions = [];
        api.fetchSongs = jest.fn(() => Promise.resolve([]))

        const fakeStore = {
            getState: () => ({ songs:[] }),
            dispatch: action =>  [...dispatchedActions,action]
        }

        await runSaga(fakeStore,fetchSongsSuccess).done

        expect(api.fetchSongs.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(fetchSongs(mockedImages));
	});
});