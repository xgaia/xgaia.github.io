# DSpark
-------------------------
---


## dsk / GATB-core
------------------

DSK is a k-mer counter for reads or genomes. It use the GATB-core library (C++)

- input: set af sequences (fasta/q)
- output: set of kmers which occur more than a minimal amount of times, and number of times thses kmers occur

output format is a binary file in h5 format. This output can converted to ascii with `dsk2ascii`

---
## dsk / GATB-core
------------------

A kmer and its reverse complement are considered to be the same lmer. DSK considers that A<C<T<G and returns the lexicographically smaller kmer using this alphabet order.




---
## dsk / GATB-core
------------------

Test with 2 fasta files containing 800 milions of reads

| Soft | Machine | cores | memory | disk | exec time |
|:---:|:---:|:---:|:---:|:---:|:---:|
| dsk | VM | 20 | 45G | 150G | 33 min |
| dsk | cluster | 40 | 100G | 500G | 24 min |



---
## DSparK
### String kmers
------------------

DSparK is the spark implementation of the dsk program


First version of DSparK handle kmers in String Format


<img src="images/dspark1.png" alt="dspark1" style="width: 700px;"/>

---
## DSparK
### String kmers
------------------


| Soft | Machine | cores | memory | disk | exec time |
|:---:|:---:|:---:|:---:|:---:|:---:|
| dsk | VM | 20 | 45G | 150G | 33 min |
| dsk | cluster | 40 | 100G | 500G | 24 min |
| DSparK1 | spark | 150 | 5G/executor | -- | 49 min |






---
## DSparK
### Binary kmers
-----------------

The second version handle kmers in binary format (Long)


<img src="images/dspark2.png" alt="dspark1" style="width: 700px;"/>


---
## DSparK
### Binary kmers
-----------------

| letter | Binary |
|:---:|:---:|
| A | 00 |
| C | 01 |
| T | 10 |
| G | 11 |

DSparK use binary operations to create binary kmers using a Long 


---
## DSparK
### Binary kmers
-----------------


| Soft | Machine | cores | memory | disk | exec time |
|:---:|:---:|:---:|:---:|:---:|:---:|
| dsk | VM | 20 | 45G | 150G | 33 min |
| dsk | cluster | 40 | 100G | 500G | 24 min |
| DSparK1 | spark | 150 | 5G/executor | -- | 49 min |
| DSparK2 | spark | 150 | 5G/executor | -- | 46 min |

