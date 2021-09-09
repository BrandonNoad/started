import {
    QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY,
    LABEL_ID_TRANSPARENCY
} from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY,
    title: 'Ultrasound / Ultrasonography',
    questionGroups: [
        {
            questions: ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            heading: 'Topical Applications',
            questions: ['p'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: [
                {
                    question: 'Was the type of the transducer (probe) reported?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were details regarding placement and calibration described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        }
                    ]
                },
                commonInstrumentationQuestions.ad,
                {
                    question: 'Was the wand type reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                commonInstrumentationQuestions.ae,
                {
                    question: 'Was the ultrasound mode (B-mode or T-mode) reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Was the position of the scan line reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Was the data collected vs data analyzed reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                }
            ]
        }
    ]
};
