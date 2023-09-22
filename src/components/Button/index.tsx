import './styles.css'

type Props = {
    text : string;
}

export default function Button({ text }: Props) {
    return (
        <button type='submit' className='btn'>{text}</button>
    );
}