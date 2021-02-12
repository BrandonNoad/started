import {
    QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    title: 'Other Instrumentation',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the placement and orientation of the device, sensor(s), and/or catheter described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question:
                        'Were operational definitions stated for every measurement that was recorded?',
                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Were all units of measurement reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
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
                        'Audio/visual recording during task',
                        'Placement of device, sensor and/or catheter'
                    ]
                },
                {
                    question:
                        ' Was the method for processing data for post-collection analysis described (e.g., normalizing, standardizing, signal processing, converting, modifying data, etc.)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question:
                        'Was there reporting of measurement artifact (e.g. non-task-related movement/data)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was the method for handling artifact described (e.g. inspection and removal prior to data analysis)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
