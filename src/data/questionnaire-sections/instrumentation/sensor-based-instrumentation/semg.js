import { QUESTIONNAIRE_SECTION_ID_SEMG } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_SEMG,
    title: 'Surface Electromyography (sEMG)',
    questionGroups: [
        {
            questions: [
                ...['u', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'r', 's', 't', 'v', 'w', 'x'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
