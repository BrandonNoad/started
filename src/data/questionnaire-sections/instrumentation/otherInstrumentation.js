import {
    QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY
} from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    title: 'Other Instrumentation',
    questionGroups: [
        {
            questions: [
                ...['d', 'e', 'f', 'p', 'q', 'r', 'ag', 'ah'].map(
                    (key) => commonInstrumentationQuestions[key]
                ),
                {
                    question:
                        'Were the following details regarding the data collection/scanning protocol reported (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Intervals of images (in seconds)',
                        'Structures measured / Regions of Interest',
                        'Scanning parameters',
                        'Tube voltages/current',
                        'Signal frequency',
                        'Sampling rate',
                        'Dose absorbed at the skin surface',
                        'Effective dose',
                        'Timing and duration of scanning'
                    ]
                },
                ...['ai', 'y'].map((key) => commonInstrumentationQuestions[key]),
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
                        'Method/accessories to optimize positioning (e.g., wedge, pillow, etc.) or measures (e.g., earplugs)',
                        'Transducer orientation (sagittal or coronal)',
                        'Use of a water or gel pad between the transducer and skin',
                        'Use of gel',
                        'Head stabilization'
                    ]
                },
                ...['e', 'v', 'w', 'j', 's', 't', 'g', 'h', 'i'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
