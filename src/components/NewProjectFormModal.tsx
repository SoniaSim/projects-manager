import Modal from 'react-modal';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { TextField, TextareaField, SelectField } from './Fields';
import { AiFillCloseCircle } from 'react-icons/ai';

Modal.setAppElement('#root');

type ModalComponentProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  maxNumberId?: number;
  projectSteps?: string[];
  createProject: (data: Inputs) => void;
};

type Inputs = {
  id: number;
  nom: string;
  description: string;
  etape: string;
  commenaire: string;
};

const customStyles = {
  content: {
    backgroundColor: 'var(--colors-background)',
    color: 'var(--colors-text)',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxHeight: 'calc(100vh - 32px)',
    borderRadius: '8px',
    border: 0,
    maxWidth: 'calc(100vw - 32px)',
    minWidth: '500px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

const NewProjectFormModal: React.FC<ModalComponentProps> = ({
  isOpen,
  onRequestClose,
  maxNumberId,
  projectSteps,
  createProject,
}) => {
  const methods = useForm<Inputs>();

  const handCloseModal = () => {
    onRequestClose();
    methods.reset();
  };

  const onSubmit: SubmitHandler<Inputs> = data => {
    createProject({ ...data, id: ((maxNumberId && maxNumberId) || 0) + 1 });
    handCloseModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex justify-between items-center pb-8">
        <h2 className="text-2xl font-bold">Ajouter un nouveau projet</h2>
        <AiFillCloseCircle
          onClick={handCloseModal}
          className="cursor-pointer"
        />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <TextField name="nom" label="Nom du projet" />
          <TextareaField name="description" label="Description du projet" />
          <TextareaField name="commentaire" label="Commentaire" />
          <SelectField
            name="etape"
            label="Étape"
            options={projectSteps || []}
          />
          <div className="flex justify-end">
            <button type="submit" className="w-32 bg-btn-background">
              Ajouter
            </button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default NewProjectFormModal;
