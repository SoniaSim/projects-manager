import Modal from 'react-modal';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import TextField from './TextField';
import TextAreaField from './TextareaField';
import { useMutation, useQueryClient } from 'react-query';
import { CREATE_PROJECT } from 'api/projects';

Modal.setAppElement('#root');

type ModalComponentProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  maxNumberId?: number;
};

type Inputs = {
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
}) => {
  const methods = useForm<Inputs>();
  const queryClient = useQueryClient();

  const { mutate: createProject } = useMutation(CREATE_PROJECT, {
    onSuccess: () => {
      queryClient.invalidateQueries('projects');
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    createProject({ ...data, id: ((maxNumberId && maxNumberId) || 0) + 1 });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <h2 className="text-2xl font-bold pb-8">Ajouter un nouveau projet</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <TextField name="nom" label="Nom du projet" />
          <TextAreaField name="description" label="Description du projet" />
          <TextAreaField name="commentaire" label="Commentaire" />
          <TextField name="etape" label="Étape" />
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
