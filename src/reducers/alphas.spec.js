import {RECEIVE_ALPHA}  from '../constants/AlphaActionTypes';
import { Map } from 'immutable';
import reducer from './alphas';
import Alpha from '../records/Alpha';

describe('tasks rootReducer', () => {

  const alpha_1 = Alpha({
    id: '1',
    title: 'Alpha Title 1',
    alphaStateIds: ["1", "2"],
  });
  const alpha_2 = Alpha({
    id: '2',
    title: 'Alpha Title 2',
    alphaStateIds: ["3", "4", "5"],
  });

  it('should handle RECEIVE_ALPHA', () => {
    expect(
        reducer(Map({}), {
          alpha: {
            id: alpha_1.id,
            title: alpha_1.title,
            alphaStateIds: alpha_1.alphaStateIds
          },
          type: RECEIVE_ALPHA

        })
    ).toEqual(Map({
          '1': alpha_1
        })
    );

    expect(
        reducer(
            Map({
              '1': alpha_1
            }),
            {
              alpha: {
                id: alpha_2.id,
                title: alpha_2.title,
                alphaStateIds: alpha_2.alphaStateIds
              },
              type: RECEIVE_ALPHA
            }
        )
    ).toEqual(
        Map({
          '1': alpha_1,
          '2': alpha_2
        }),
    )
  });
});