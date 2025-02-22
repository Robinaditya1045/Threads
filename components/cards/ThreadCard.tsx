import Image from "next/image";
import Link from "next/link";

interface Props {
    id:string,
    currentUser: string,
    parentId:string | null, 
    content: string,
    author:{
        name: string,
        image: string,
        id: string
    },
    community:{
        id:string,
        name: string,
        image: string
    } | null,
    createdAt:string,
    comments:{
        author: {
            image: string;
        }
    }[],
    isComment?: boolean,
}


const ThreadCard = ({ id,currentUser,parentId, content,author,community,createdAt,comments,isComment}:Props) => {

    return(
        <article className={`flex w-full flex-col rounded-xl ${isComment ? 'px-0 sx:px-7' : 'bg-dark-2 p-7'}`}>
            <div className="flex items-start justify-between">
                <div className="flex w-full flex-1 gap-4">
                    <div className="flex flex-col items-center">
                        <Link href={`/profile/${author.id}`} className="relative w-11 h-11">
                            <Image src={author.image} alt="user" fill className="cursor-pointer rounded-full"  />
                        </Link>
                        <div className="thread-card_bar" />
                    </div>
                    <div className="flex w-full flex-col">
                    <Link href={`/profile/${author.id}`} className="w-fit">
                        <h4 className="cursor-pointer text-base-semibold text-light-1">{author.name}</h4>
                    </Link>
                    <p className="mt-2 text-sm-regular text-light-2">{content}</p>

                    <div className={`${isComment && 'mb-10'} mt-5 flex flex-col gap-3`}>
                        <div className="flex gap-3.5">
                            <Image src='/assets/heart-gray.svg' alt="like" width={24} height={24} className="cursor-pointer" />
                            <Link href={`/thread/${id}`}>
                                <Image src="/assets/reply.svg" alt="reply" width={24} height={24} className="cursor-pointer" />
                            </Link>
                            <Image src="/assets/repost.svg" alt="repost" width={24} height={24} className="cursor-pointer" />
                            <Image src="/assets/share.svg" alt="share" width={24} height={24} className="cursor-pointer" />
                        </div>

                        {isComment && comments.length > 0 && (
                            <Link href={`/thread/${id}`}>
                                <p className="mt-1 text-subtle-medium text-gray-1">{comments.length} replies</p>
                            </Link>
                        )}
                    </div>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default ThreadCard;