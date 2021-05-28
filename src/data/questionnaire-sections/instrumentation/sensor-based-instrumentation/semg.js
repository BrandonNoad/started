import { QUESTIONNAIRE_SECTION_ID_SEMG } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_SEMG,
    title: 'Surface Electromyography (sEMG)',
    questionGroups: [
        {
            questions: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            questions: ['r', 's', 't', 'u', 'v', 'w', 'x'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        }
    ]
};
