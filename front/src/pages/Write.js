import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox'
import Responsive from '../components/common/Responsive';

const Write = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default Write;