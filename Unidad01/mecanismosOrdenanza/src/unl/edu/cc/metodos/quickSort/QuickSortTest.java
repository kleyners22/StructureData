package unl.edu.cc.metodos.quickSort;

import static org.junit.Assert.*;
import static unl.edu.cc.metodos.quickSort.QuickSort.quickSort;

public class QuickSortTest {
    public static void main(String[] args) {
        int[] arr = {20, 80, 84520, 1, 6};

        quickSort(arr, 0, arr.length - 1);

        for (int n : arr) {
            System.out.print(n + " ");
        }
    }
}