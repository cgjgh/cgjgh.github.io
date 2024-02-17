import '../../index.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div className="bg">
            <button>Button</button>
        </div>
    ),
    isSnippet: true,
});
