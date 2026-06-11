package unl.edu.cc.metodos.Insertion;

import static org.junit.Assert.*;
import static unl.edu.cc.metodos.Insertion.InsertionShort.insertionSort;

public class InsertionShortTest {

    public static void main(String[] args) {
        int[] arr = {8, 7, 1, 4, 6, 3, 2, 5, 9};

        insertionSort(arr);

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}