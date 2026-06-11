package unl.edu.cc.metodos.BubbletShort;

import static unl.edu.cc.metodos.BubbletShort.BubbleShort.bubbleSort;

class BubbleShortTest {
    public static void main(String[] args) {
        int[] arr = {1000, 845120, 423, 74123, 96, 453, 2, 5, 9};

        bubbleSort(arr);

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}