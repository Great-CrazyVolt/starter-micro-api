import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ task, deleteTask, updateTask }) => {
    // console.log(task)
    const [mouseIsOver, setMouseIsOver] = useState(false);
    // const [editMode, setEditMode] = useState(true);
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        },
        // disabled: editMode,
    });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const toggleEditMode = () => {
        // setEditMode((prev) => !prev);
        setMouseIsOver(false);
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="
            opacity-30
          bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
          "
            />
        );
    }

    // if (editMode) {
    //     return (
    //         <div
    //             ref={setNodeRef}
    //             style={style}
    //             {...attributes}
    //             {...listeners}
    //             className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
    //         >
    //             <textarea
    //                 className="
    //                     h-[90%]
    //                     w-full resize-none border-none rounded text-black bg-transparent text-white focus:outline-none
    //                 "
    //                 value={task.content}
    //                 autoFocus
    //                 placeholder="Task content here"
    //                 onBlur={toggleEditMode}
    //                 onKeyDown={(e) => {
    //                     if (e.key === "Enter" && e.shiftKey) {
    //                         toggleEditMode();
    //                     }
    //                 }}
    //                 onChange={(e) => updateTask(task.id, e.target.value)}
    //             />
    //         </div>
    //     );
    // }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={toggleEditMode}
            className="bg-black p-2.5 h-[150px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
            onMouseEnter={() => {
                setMouseIsOver(true);
            }}
            onMouseLeave={() => {
                setMouseIsOver(false);
            }}
        >
            <p className="my-auto text-white h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        {task.firstName}
                    </div>
                    <div className="col-span-3">
                        {task.department}
                    </div>
                    <div className="">
                        {task.hours}
                    </div>
                    <div>
                        {task.employeeStatus}
                    </div>
                    <div>
                        {task.content}
                    </div>
                </div>
            </p>

            {mouseIsOver && (
                <button
                    onClick={() => {
                        deleteTask(task.id);
                    }}
                    className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
                >
                    <TrashIcon />
                </button>
            )}
        </div>
    )
}

export default TaskCard