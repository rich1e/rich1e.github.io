### 1. internal S

  

- passive_eme_internal_s_matrix_option�

  

入参

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

},

"token": "123456"

}

```

响应

```json

{

"success": true,

"result": {

"attribute": [

"internal_s"

],

"attributes": [

"internal_s"

],

"operation": [

"ABS",

"ABS^2",

"-Real",

"Real",

"Imaginary",

"Angle"

],

"operations": [

"ABS",

"ABS^2",

"-Real",

"Real",

"Imaginary",

"Angle"

],

"dimensions": [],

"units": [],

"code": 50000

}

}

```

  

- passive_internal_s_and_eme_cell_pmatrix_overlap_S_chart�

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

"attribute": "internal_s",

"operation": "ABS",

"CellParams": "", // internal s 不需要传CellParams,或者传空

"log": false

},

"option": {

},

"token": "123456"

}

```

  

<a name="A3wal"></a>

## Cell

<a name="nuvaw"></a>

##### 2. Cell_Overlap

  

- passive_eme_cell_overlap_option�

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

},

"token": "123456"

}

```

响应参考 internal S

  

- passive_internal_s_and_eme_cell_pmatrix_overlap_s_chart

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

"attribute": "Overlap",

"operation": "ABS",

"CellParams": "c0_c1",

"log": false,

"monitorIndex": 0

},

"option": {

},

"token": "123456"

}

```

<a name="zPYe8"></a>

##### 3. Cell_Pmatrix�

  

- passive_eme_cell_pmatrix_option�

```json

{

"target": "intensity",

"pub": {

"taskId": 229751

},

"token": "123456"

}

```

响应参考 internal S

  

- passive_internal_s_and_eme_cell_pmatrix_overlap_s_chart

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

"attribute": "Pmatrix",

"operation": "ABS",

"CellParams": "c0",

"log": false,

"monitorIndex": 0

},

"option": {},

"token": "123456"

}

```

<a name="BdGRR"></a>

##### 4. Cell_S

  

- passive_eme_cell_s_option�

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

},

"token": "123456"

}

```

  

- passive_internal_s_and_eme_cell_pmatrix_overlap_s_chart

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

"attribute": "S",

"operation": "ABS",

"CellParams": "c0_c1",

"log": false,

"monitorIndex": 0

},

"option": {

},

"token": "123456"

}

```

  

<a name="u4CyI"></a>

##### 5. mode field

  

- passive_eme_cell_mode_info_option�

```json

{

"target": "intensity",

"pub": {

"taskId": "232099",

"monitorIndex": "0_M"

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

- passive_eme_cell_mode_info_chart�

```json

{

"target": "intensity",

"pub": {

"taskId": "232099",

"monitorIndex": "0_M",

"attribute": "E",

"operation": "ABS",

"fdtd": false

},

"option": {

"y": "plotX",

"z": "plotY",

"x": 0,

"mode": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

<a name="MHNb2"></a>

##### 6. mode ng

  

- passive_eme_mode_ng_option (通用, port 的 mode ng 也用这个option)

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

- passive_eme_cell_mode_ng_effective_index_chart (注意：和 port 的有区别)

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": "0_M",

"attribute": "group index",

"operation": "ABS",

"fdtd": false

},

"option": {

"mode": "plotX"

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

<a name="b3wLE"></a>

##### 7. mode effective index

  

- passive_eme_mode_effective_index_option (所有的 mode effective index option 通用)

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

- passive_eme_cell_mode_ng_effective_index_chart (注意: 和 port 有区别，和 cell 下的 ng 区别为 attribute不一样)

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": "0_M",

"attribute": "effective index",

"operation": "ABS",

"fdtd": false

},

"option": {

"mode": "plotX"

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

<a name="ThXcc"></a>

## Port

<a name="yLx3Y"></a>

##### 9. Port_Overlap

  

- passive_eme_port_overlap_option

```json

{

"target": "intensity",

"pub": {

"taskId": 229751

},

"token": "123456"

}

```

  

- passive_eme_port_overlap_chart�

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

"attribute": "Overlap",

"operation": "Amplitude",

"log": false,

"monitorIndex": 0

},

"option": {

},

"token": "123456"

}

```

<a name="QOhaE"></a>

##### 10. Mesh field

  

- passive_eme_port_mode_info_option

```json

{

"target": "intensity",

"pub": {

"taskId": "229751",

"monitorIndex": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

- passive_eme_port_mode_info_chart

```json

{

"target": "intensity",

"pub": {

"taskId": "229751",

"monitorIndex": 0,

"attribute": "E",

"operation": "ABS",

"fdtd": false

},

"option": {

"y": "plotX",

"z": "plotY",

"x": 0,

"mode": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

<a name="FOLyW"></a>

##### 11. mode ng

  

- passive_eme_mode_ng_option (通用, port 的 mode ng 也用这个option)

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

- passive_eme_port_mode_ng_effective_index_chart�

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": 0, // port 的为 int

"attribute": "group index",

"operation": "ABS",

"fdtd": false

},

"option": {

"mode": "plotX"

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

  

```

<a name="B81Dy"></a>

##### 12. mode effective index

  

- passive_eme_mode_effective_index_option (所有的 mode effective index option 通用)

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

- passive_eme_port_mode_ng_effective_index_chart�

```json

{

"target": "line",

"pub": {

"taskId": "229751",

"monitorIndex": 0, // port 的 为 int

"attribute": "effective index",

"operation": "ABS",

"fdtd": false

},

"option": {

"mode": "plotX"

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

<a name="Uvfd4"></a>

## Prop

<a name="ga0oN"></a>

#### 13. Prop S

  

- passive_eme_prop_s_option�

```json

{

"target": "intensity",

"pub": {

"taskId": 229751

},

"token": "123456"

}

```

  

- passive_eme_prop_s_chart�

```json

{

"target": "intensity",

"pub": {

"taskId": 229751,

"attribute": "S",

"operation": "ABS",

"CellParams": "c0_c1",

"log": false,

"monitorIndex": 0

},

"option": {

},

"token": "123456"

}

```

<a name="z262c"></a>

##### 14. Prop field

  

- passive_eme_prop_field_option

```json

{

"target": "intensity",

"pub": {

"taskId": "232137",

"monitorIndex": "c0_c1",

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```

  

- passive_eme_prop_field_chart

```json

{

"target": "intensity",

"pub": {

"taskId": "232137",

"monitorIndex": "c0_c1",

"attribute": "Ex",

"operation": "ABS"

},

"option": {

"y": "plotX",

"z": "plotY",

"x": 0

},

"token": "7b193c3675c94e8f9f3fff6846106b6b"

}

```