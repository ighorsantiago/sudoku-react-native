import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Cell } from '../../components/Cell';
import { MenuButton } from '../../components/MenuButton';

import { easy, medium, hard, expert } from '../../utils/games';

import { rules } from './rules'

import {
    Container,
    Header,
    BackButton,
    Title,
    Settings,
    Content,
    Board,
    Menu,
    ModalView,
    ModalText,
    Footer,
    Button,
    Text,
} from './styles';


interface Params {
    level: string;
}

interface CellProps {
    index: number;
    value: string;
    row: number;
    column: number;
    block: number;
    blockColor: string;
    color: string;
    preFilled: boolean;
    highlighted: boolean;
    right: boolean;
    backColor: string;
}

export function Game() {

    const route = useRoute();
    const { level } = route.params as Params;

    const navigation = useNavigation();

    const [board, setBoard] = useState<CellProps[]>([]);
    const [selectedCell, setSelectedCell] = useState<CellProps>({} as CellProps);
    const [lastCellChanged, setLastCellChanged] = useState<CellProps[]>([{} as CellProps]);

    const [showBoard, setShowBoard] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const highlight = '#242430';

    let wrong = false;

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const grids = [
        { id: 1, cells: "11,12,13,21,22,23,31,32,33" },
        { id: 2, cells: "14,15,16,24,25,26,34,35,36" },
        { id: 3, cells: "17,18,19,27,28,29,37,38,39" },
        { id: 4, cells: "41,42,43,51,52,53,61,62,63" },
        { id: 5, cells: "44,45,46,54,55,56,64,65,66" },
        { id: 6, cells: "47,48,49,57,58,59,67,68,69" },
        { id: 7, cells: "71,72,73,81,82,83,91,92,93" },
        { id: 8, cells: "74,75,76,84,85,86,94,95,96" },
        { id: 9, cells: "77,78,79,87,88,89,97,98,99" },
    ];

    useEffect(() => {

        async function fetchGame() {
            const index = Math.floor(Math.random() * 34) + 1;

            let _game = '';

            if (level === 'easy') _game = String(easy[index]);
            if (level === 'medium') _game = String(medium[index]);
            if (level === 'hard') _game = String(hard[index]);
            if (level === 'expert') _game = String(expert[index]);
            
            await handleSelectGame(_game);
        }

        fetchGame();
    }, [route]);

    function handleGoBack() { navigation.goBack() }

    async function handleSelectGame(gameString: string) {

        const organizedGame = gameString
            .split('')
            .map(item => {
                if (item === '0') {
                    return '';
                } else {
                    return item;
                }
            });

        await handleBoard(organizedGame);
    }

    function handleBlock(row: number, column: number) {
        const rowColumn = (row + "" + column)
        let block = 0;
        grids.map(item => item.cells.includes(rowColumn) ? block = item.id : "")

        return block;
    }

    async function handleBoard(game: string[]) {

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let index = ((i * 9) + j);
                let row = (i + 1);
                let column = (j + 1);
                let block = Number(handleBlock(row, column));
                let blockColor = (block % 2) === 1 ? "#32303a" : "#3a3944";
                let value = String(game[index]);
                let preFilled = value !== '' ? true : false;
                let highlighted = false;
                let right = true;
                let color = preFilled ? 'gray' : 'darkslateblue';

                if (value !== '') preFilled = true

                const newCell = {
                    index,
                    value,
                    row,
                    column,
                    block,
                    color,
                    blockColor,
                    borderColor: "black",
                    preFilled,
                    highlighted,
                    right,
                    backColor: blockColor
                }
                setBoard(board => [...board, newCell]);
            }
        }
        setShowBoard(true);
    }

    async function handleNumberPress(newValue: string) {

        const id = selectedCell.index;

        setLastCellChanged([...lastCellChanged, selectedCell]);
        
        await handleRules(newValue);

        setBoard(board.map(cell => {
            if (cell.index === id) {
                if (wrong) return { ...cell, color: 'red', value: newValue }
                else return { ...cell, value: newValue }
            } else { return cell }
        }));
    }

    async function handleHighlight(item: CellProps) {

        board.map(item => { item.backColor = item.blockColor });

        setBoard(board.map(cell => {
            if (
                (cell.value === item.value) && (item.value !== "") ||
                (cell.row === item.row) ||
                (cell.column === item.column) ||
                (cell.block === item.block)
            ) {
                return { ...cell, backColor: highlight };
            } else return cell;
        }));

        setSelectedCell(item);
    }

    async function handleRules(newValue: string) {

        const selectedCellRow = selectedCell.row;
        const selectedCellColumn = selectedCell.column;
        const selectedCellBlock = selectedCell.block;

        wrong = false;

        board.map(cell => {
            if(cell.index !== selectedCell.index) {
                // Verifica as células da mesma linha
                if(
                    (cell.row === selectedCellRow) ||
                    (cell.column === selectedCellColumn) ||
                    (cell.block === selectedCellBlock)
                ) {
                    if(cell.value === newValue) {
                        wrong = true;
                    }
                }
            }
        });
    }

    function handleUndo() {

        if (lastCellChanged.length >= 1) {
            const lastCell = lastCellChanged[lastCellChanged.length - 1];
            const id = lastCell.index;

            setBoard(board.map(cell => {
                if (cell.index === id) {
                    return lastCell;
                } else { return cell }
            }));

            lastCellChanged.pop();
        }
    }

    function handleErase() {

        const id = selectedCell.index;

        setLastCellChanged([...lastCellChanged, selectedCell]);

        setBoard(board.map(cell => {
            if (cell.index === id) {
                return { ...cell, value: '' }
            } else { return cell }
        }));
    }

    return (

        <Container>
            <Header>
                <BackButton onPress={handleGoBack}>
                    <MaterialIcons
                        name="chevron-left"
                        size={30}
                        color="#FFF"
                    />
                </BackButton>
                <Title>SUDOKU</Title>
                <Settings onPress={() => setShowModal(false)}>
                    <MaterialIcons
                        name="settings"
                        size={30}
                        color="#FFF"
                    />
                </Settings>
            </Header>

            <Content>
                {!showBoard ? <ActivityIndicator /> :
                    <Board
                        data={board}
                        keyExtractor={item => String(item.index)}
                        numColumns={9}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Cell
                                index={item.index}
                                row={item.row}
                                column={item.column}
                                block={item.block}
                                value={item.value}
                                preFilled={item.preFilled}
                                highlighted={item.highlighted}
                                enabled={!item.preFilled}
                                color={item.color}
                                backgroundColor={item.backColor}
                                borderColor={item.right ? 'black' : 'red'}
                                onPress={() => handleHighlight(item)}
                            />
                        )}
                    />
                }

                <Menu>
                    <MenuButton
                        name="undo"
                        size={30}
                        text="Desfazer"
                        onPress={handleUndo}
                    />
                    <MenuButton
                        name="eraser"
                        size={30}
                        text="Apagar"
                        onPress={handleErase}
                    />
                    <MenuButton
                        name="pencil-alt"
                        size={30}
                        text="Anotações"
                    />
                    <MenuButton
                        name="lightbulb"
                        size={30}
                        text="Dica"
                    />
                </Menu>
            </Content>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
            >
                <ModalView>
                    <ModalText>
                        Regras: {'\n'}
                        Cada linha, coluna e bloco só podem conter números de 1 a 9 sem repetir.                        
                    </ModalText>
                </ModalView>
            </Modal>

            <Footer>
                {numbers.map(item =>
                    <Button key={item} onPress={() => handleNumberPress(item)}>
                        <Text>{item}</Text>
                    </Button>
                )}
            </Footer>
        </Container>
    );
}
