import { QUESTIONNAIRE_SECTION_ID_SEMG } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_SEMG,
    title: 'Surface Electromyography (sEMG)',
    questionGroups: [
        {
            questions: [
                ...['d', 'e', 'f', 'u', 'x', 'v', 'w', 's', 't', 'j', 'g', 'h', 'i'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
