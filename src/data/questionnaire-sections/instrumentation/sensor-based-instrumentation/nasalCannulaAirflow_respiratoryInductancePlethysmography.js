import { QUESTIONNAIRE_SECTION_ID_NASAL_CANNULA_AIRFLOW_RESPIRATORY_INDUCTANCE_PLETHYSMOGRAPHY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_NASAL_CANNULA_AIRFLOW_RESPIRATORY_INDUCTANCE_PLETHYSMOGRAPHY,
    title: 'Nasal Cannula Airflow / Respiratory Inductance Plethysmography',
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
