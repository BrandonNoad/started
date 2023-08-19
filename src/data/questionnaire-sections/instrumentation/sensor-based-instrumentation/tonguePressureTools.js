import { QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS,
    title: 'Tongue Pressure',
    questionGroups: [
        {
            questions: [
                ...['u', 'd', 'e', 'f', 'r', 's', 't', 'v', 'w'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
