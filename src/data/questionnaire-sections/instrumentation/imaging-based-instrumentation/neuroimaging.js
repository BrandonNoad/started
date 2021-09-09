import {
    QUESTIONNAIRE_SECTION_ID_NEUROIMAGING,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_NEUROIMAGING,
    title: 'Neuroimaging (MRI, fMRI, MEG)',
    questionGroups: [
        {
            heading: 'Please see other neuroimaging guidelines',
            questions: []
        }
        // {
        //     questions: ['c', 'd', 'e', 'g', 'h', 'i', 'j'].map(
        //         (key) => commonInstrumentationQuestions[key]
        //     )
        // },
        // {
        //     questions: [
        //         {
        //             question: 'Was the participant’s handedness reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Were the number of neuroimaging sessions reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Was the duration of the tasks reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Were the number of events collected reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question:
        //                 'Was the methodology to localize/determine the brain areas and ROI described?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question:
        //                 'Was a training session to familiarize participants with the neuroimage procedures used?',
        //             labels: [LABEL_ID_RIGOR],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Were the details regarding the training session described?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Were off-line tasks used and reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Were real-line tasks used and reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Was the type of scan performed reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Were functional images collected?',
        //             labels: [LABEL_ID_RIGOR],
        //             responseOptions: ['Yes', 'No'],
        //             questionGroups: [
        //                 {
        //                     filter: 0,
        //                     questions: [
        //                         {
        //                             question:
        //                                 'Was the methodology to acquire functional images described?',
        //                             labels: [LABEL_ID_TRANSPARENCY],
        //                             responseOptions: ['Yes', 'No']
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             question: 'Was the number of slices reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Were magnetic fields collected?',
        //             labels: [],
        //             responseOptions: ['Yes', 'No'],
        //             questionGroups: [
        //                 {
        //                     filter: 0,
        //                     questions: [
        //                         {
        //                             question:
        //                                 'Was the methodology to record magnetic fields described?',
        //                             labels: [LABEL_ID_TRANSPARENCY],
        //                             responseOptions: ['Yes', 'No']
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             question: 'Was the methodology to determine activation clusters described?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Was the type of atlas used reported (Tournoux, Talairach, etc)?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No'],
        //             questionGroups: [
        //                 {
        //                     filter: 0,
        //                     questions: [
        //                         {
        //                             question:
        //                                 'Was the methodology to determine the atlas described?',
        //                             labels: [LABEL_ID_TRANSPARENCY],
        //                             responseOptions: ['Yes', 'No']
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             question: 'Was scan resolution and size of voxels reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question: 'Was the event used to compare the fMRI results reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         },
        //         {
        //             question:
        //                 'Were the model, type, and channels used in the head coil/helmet reported?',
        //             labels: [LABEL_ID_TRANSPARENCY],
        //             responseOptions: ['Yes', 'No']
        //         }
        //     ]
        // }
    ]
};
