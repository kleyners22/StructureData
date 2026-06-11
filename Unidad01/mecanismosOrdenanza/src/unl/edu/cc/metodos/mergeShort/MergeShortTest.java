package unl.edu.cc.metodos.mergeShort;

import static org.junit.Assert.*;
import static unl.edu.cc.metodos.mergeShort.MergeShort.mergeSort;

public class MergeShortTest {
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 6};

        mergeSort(arr, 0, arr.length - 1);

        for (int n : arr) {
            System.out.print(n + " ");
        }
    }
}
