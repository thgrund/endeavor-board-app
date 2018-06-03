import {RECEIVE_AREA_OF_CONCERNS}
from '../constants/AreaOfConcernTypes';
import { Map } from 'immutable';
import reducer from './areaOfConcerns';
import AreaOfConcern from '../records/AreaOfConcern';

describe('tasks rootReducer', () => {

  const areaOfConcern_1 = AreaOfConcern({
    id: '1',
    title: 'Area of Concern Titel 1',
    color: '#324FFF',
    alphaIds: ["1", "2"],
  });
  const areaOfConcern_2 = AreaOfConcern({
    id: '2',
    title: 'Area of Concern Titel21',
    color: '#ff1a38',
    alphaIds: ["3", "4", "5"],
  });

  it('should handle RECEIVE_AREA_OF_CONCERNS', () => {
    expect(
        reducer(Map({}), {
          areaOfConcern: {
            id: areaOfConcern_1.id,
            title: areaOfConcern_1.title,
            color: areaOfConcern_1.color,
            alphaIds: areaOfConcern_1.alphaIds
          },
          type: RECEIVE_AREA_OF_CONCERNS

        })
    ).toEqual(Map({
          '1': areaOfConcern_1
        })
    );

    expect(
        reducer(
            Map({
              '1': areaOfConcern_1
            }),
            {
              areaOfConcern: {
                id: areaOfConcern_2.id,
                title: areaOfConcern_2.title,
                color: areaOfConcern_2.color,
                alphaIds: areaOfConcern_2.alphaIds
              },
              type: RECEIVE_AREA_OF_CONCERNS
            }
        )
    ).toEqual(
        Map({
          '1': areaOfConcern_1,
          '2': areaOfConcern_2
        }),
    )
  });
});