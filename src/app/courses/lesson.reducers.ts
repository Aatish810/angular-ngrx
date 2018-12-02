import { CourseActions } from './course.actions';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Lesson } from './model/lesson';


export interface LessonsState extends EntityState<Lesson> {

}

export const adapter: EntityAdapter<Lesson> = 
createEntityAdapter<Lesson>();


const initialLessonState = adapter.getInitialState()

export function lessonReducer (state = initialLessonState, 
                                action: CourseActions): LessonsState {
        switch(action.type) {

            default:
            return state
        }
 }

 export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  
  } = adapter.getSelectors();
  