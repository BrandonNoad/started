import {
    QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY,
    LABEL_ID_TRANSPARENCY
} from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY,
    title: 'Ultrasound',
    questionGroups: [
        {
            questions: [
                commonInstrumentationQuestions.d,
                {
                    question: 'Was the ultrasound mode (B-mode or T-mode) reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                commonInstrumentationQuestions.ae,
                {
                    question: 'Was the type of the transducer (probe) reported?',
                    labels: [],
                    responseOptions: ['Yes', 'No', 'N/A'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were details regarding placement and calibration described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                }
                            ]
                        }
                    ]
                },
                commonInstrumentationQuestions.y,
                {
                    question: 'Was the following task-specific information reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Type of task(s) performed (e.g., dry swallows, effortful swallows, tongue-to-palate presses, etc.)',
                        'Number of trials',
                        'Rest between trials',
                        'Duration of session',
                        'Number of sessions',
                        'Participant positioning',
                        'Transducer orientation (sagittal or coronal)',
                        'Use of a water or gel pad between the transducer and skin',
                        'Use of gel',
                        'Head stabilization',
                        'Audio/visual recording during task'
                    ]
                },
                ...['x', 'e', 'v', 'w', 'j', 's', 't', 'g', 'h', 'i'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
