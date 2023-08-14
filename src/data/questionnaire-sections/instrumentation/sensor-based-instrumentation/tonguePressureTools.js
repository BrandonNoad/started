import { QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS,
    title: 'Tongue Pressure',
    questionGroups: [
        {
            questions: ['b', 'c', 'd', 'e', 'f'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: ['r', 's', 't', 'u', 'v', 'w'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        }
    ]
};
