/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare module ts {
    interface Map<T> {
        [index: string]: T;
    }
    interface TextRange {
        pos: number;
        end: number;
    }
    const enum SyntaxKind {
        Unknown = 0,
        EndOfFileToken = 1,
        SingleLineCommentTrivia = 2,
        MultiLineCommentTrivia = 3,
        NewLineTrivia = 4,
        WhitespaceTrivia = 5,
        ConflictMarkerTrivia = 6,
        NumericLiteral = 7,
        StringLiteral = 8,
        RegularExpressionLiteral = 9,
        NoSubstitutionTemplateLiteral = 10,
        TemplateHead = 11,
        TemplateMiddle = 12,
        TemplateTail = 13,
        OpenBraceToken = 14,
        CloseBraceToken = 15,
        OpenParenToken = 16,
        CloseParenToken = 17,
        OpenBracketToken = 18,
        CloseBracketToken = 19,
        DotToken = 20,
        DotDotDotToken = 21,
        SemicolonToken = 22,
        CommaToken = 23,
        LessThanToken = 24,
        GreaterThanToken = 25,
        LessThanEqualsToken = 26,
        GreaterThanEqualsToken = 27,
        EqualsEqualsToken = 28,
        ExclamationEqualsToken = 29,
        EqualsEqualsEqualsToken = 30,
        ExclamationEqualsEqualsToken = 31,
        EqualsGreaterThanToken = 32,
        PlusToken = 33,
        MinusToken = 34,
        AsteriskToken = 35,
        SlashToken = 36,
        PercentToken = 37,
        PlusPlusToken = 38,
        MinusMinusToken = 39,
        LessThanLessThanToken = 40,
        GreaterThanGreaterThanToken = 41,
        GreaterThanGreaterThanGreaterThanToken = 42,
        AmpersandToken = 43,
        BarToken = 44,
        CaretToken = 45,
        ExclamationToken = 46,
        TildeToken = 47,
        AmpersandAmpersandToken = 48,
        BarBarToken = 49,
        QuestionToken = 50,
        ColonToken = 51,
        AtToken = 52,
        EqualsToken = 53,
        PlusEqualsToken = 54,
        MinusEqualsToken = 55,
        AsteriskEqualsToken = 56,
        SlashEqualsToken = 57,
        PercentEqualsToken = 58,
        LessThanLessThanEqualsToken = 59,
        GreaterThanGreaterThanEqualsToken = 60,
        GreaterThanGreaterThanGreaterThanEqualsToken = 61,
        AmpersandEqualsToken = 62,
        BarEqualsToken = 63,
        CaretEqualsToken = 64,
        Identifier = 65,
        BreakKeyword = 66,
        CaseKeyword = 67,
        CatchKeyword = 68,
        ClassKeyword = 69,
        ConstKeyword = 70,
        ContinueKeyword = 71,
        DebuggerKeyword = 72,
        DefaultKeyword = 73,
        DeleteKeyword = 74,
        DoKeyword = 75,
        ElseKeyword = 76,
        EnumKeyword = 77,
        ExportKeyword = 78,
        ExtendsKeyword = 79,
        FalseKeyword = 80,
        FinallyKeyword = 81,
        ForKeyword = 82,
        FunctionKeyword = 83,
        IfKeyword = 84,
        ImportKeyword = 85,
        InKeyword = 86,
        InstanceOfKeyword = 87,
        NewKeyword = 88,
        NullKeyword = 89,
        ReturnKeyword = 90,
        SuperKeyword = 91,
        SwitchKeyword = 92,
        ThisKeyword = 93,
        ThrowKeyword = 94,
        TrueKeyword = 95,
        TryKeyword = 96,
        TypeOfKeyword = 97,
        VarKeyword = 98,
        VoidKeyword = 99,
        WhileKeyword = 100,
        WithKeyword = 101,
        AsKeyword = 102,
        ImplementsKeyword = 103,
        InterfaceKeyword = 104,
        LetKeyword = 105,
        PackageKeyword = 106,
        PrivateKeyword = 107,
        ProtectedKeyword = 108,
        PublicKeyword = 109,
        StaticKeyword = 110,
        YieldKeyword = 111,
        AnyKeyword = 112,
        BooleanKeyword = 113,
        ConstructorKeyword = 114,
        DeclareKeyword = 115,
        GetKeyword = 116,
        ModuleKeyword = 117,
        RequireKeyword = 118,
        NumberKeyword = 119,
        SetKeyword = 120,
        StringKeyword = 121,
        SymbolKeyword = 122,
        TypeKeyword = 123,
        FromKeyword = 124,
        OfKeyword = 125,
        QualifiedName = 126,
        ComputedPropertyName = 127,
        TypeParameter = 128,
        Parameter = 129,
        Decorator = 130,
        PropertySignature = 131,
        PropertyDeclaration = 132,
        MethodSignature = 133,
        MethodDeclaration = 134,
        Constructor = 135,
        GetAccessor = 136,
        SetAccessor = 137,
        CallSignature = 138,
        ConstructSignature = 139,
        IndexSignature = 140,
        TypeReference = 141,
        FunctionType = 142,
        ConstructorType = 143,
        TypeQuery = 144,
        TypeLiteral = 145,
        ArrayType = 146,
        TupleType = 147,
        UnionType = 148,
        ParenthesizedType = 149,
        ObjectBindingPattern = 150,
        ArrayBindingPattern = 151,
        BindingElement = 152,
        ArrayLiteralExpression = 153,
        ObjectLiteralExpression = 154,
        PropertyAccessExpression = 155,
        ElementAccessExpression = 156,
        CallExpression = 157,
        NewExpression = 158,
        TaggedTemplateExpression = 159,
        TypeAssertionExpression = 160,
        ParenthesizedExpression = 161,
        FunctionExpression = 162,
        ArrowFunction = 163,
        DeleteExpression = 164,
        TypeOfExpression = 165,
        VoidExpression = 166,
        PrefixUnaryExpression = 167,
        PostfixUnaryExpression = 168,
        BinaryExpression = 169,
        ConditionalExpression = 170,
        TemplateExpression = 171,
        YieldExpression = 172,
        SpreadElementExpression = 173,
        ClassExpression = 174,
        OmittedExpression = 175,
        TemplateSpan = 176,
        HeritageClauseElement = 177,
        SemicolonClassElement = 178,
        Block = 179,
        VariableStatement = 180,
        EmptyStatement = 181,
        ExpressionStatement = 182,
        IfStatement = 183,
        DoStatement = 184,
        WhileStatement = 185,
        ForStatement = 186,
        ForInStatement = 187,
        ForOfStatement = 188,
        ContinueStatement = 189,
        BreakStatement = 190,
        ReturnStatement = 191,
        WithStatement = 192,
        SwitchStatement = 193,
        LabeledStatement = 194,
        ThrowStatement = 195,
        TryStatement = 196,
        DebuggerStatement = 197,
        VariableDeclaration = 198,
        VariableDeclarationList = 199,
        FunctionDeclaration = 200,
        ClassDeclaration = 201,
        InterfaceDeclaration = 202,
        TypeAliasDeclaration = 203,
        EnumDeclaration = 204,
        ModuleDeclaration = 205,
        ModuleBlock = 206,
        CaseBlock = 207,
        ImportEqualsDeclaration = 208,
        ImportDeclaration = 209,
        ImportClause = 210,
        NamespaceImport = 211,
        NamedImports = 212,
        ImportSpecifier = 213,
        ExportAssignment = 214,
        ExportDeclaration = 215,
        NamedExports = 216,
        ExportSpecifier = 217,
        MissingDeclaration = 218,
        ExternalModuleReference = 219,
        CaseClause = 220,
        DefaultClause = 221,
        HeritageClause = 222,
        CatchClause = 223,
        PropertyAssignment = 224,
        ShorthandPropertyAssignment = 225,
        EnumMember = 226,
        SourceFile = 227,
        SyntaxList = 228,
        Count = 229,
        FirstAssignment = 53,
        LastAssignment = 64,
        FirstReservedWord = 66,
        LastReservedWord = 101,
        FirstKeyword = 66,
        LastKeyword = 125,
        FirstFutureReservedWord = 103,
        LastFutureReservedWord = 111,
        FirstTypeNode = 141,
        LastTypeNode = 149,
        FirstPunctuation = 14,
        LastPunctuation = 64,
        FirstToken = 0,
        LastToken = 125,
        FirstTriviaToken = 2,
        LastTriviaToken = 6,
        FirstLiteralToken = 7,
        LastLiteralToken = 10,
        FirstTemplateToken = 10,
        LastTemplateToken = 13,
        FirstBinaryOperator = 24,
        LastBinaryOperator = 64,
        FirstNode = 126,
    }
    const enum NodeFlags {
        Export = 1,
        Ambient = 2,
        Public = 16,
        Private = 32,
        Protected = 64,
        Static = 128,
        Default = 256,
        MultiLine = 512,
        Synthetic = 1024,
        DeclarationFile = 2048,
        Let = 4096,
        Const = 8192,
        OctalLiteral = 16384,
        ExportContext = 32768,
        Modifier = 499,
        AccessibilityModifier = 112,
        BlockScoped = 12288,
    }
    interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        decorators?: NodeArray<Decorator>;
        modifiers?: ModifiersArray;
        parent?: Node;
    }
    interface NodeArray<T> extends Array<T>, TextRange {
        hasTrailingComma?: boolean;
    }
    interface ModifiersArray extends NodeArray<Node> {
        flags: number;
    }
    interface Identifier extends PrimaryExpression {
        text: string;
    }
    interface QualifiedName extends Node {
        left: EntityName;
        right: Identifier;
    }
    type EntityName = Identifier | QualifiedName;
    type DeclarationName = Identifier | LiteralExpression | ComputedPropertyName | BindingPattern;
    interface Declaration extends Node {
        _declarationBrand: any;
        name?: DeclarationName;
    }
    interface ComputedPropertyName extends Node {
        expression: Expression;
    }
    interface Decorator extends Node {
        expression: LeftHandSideExpression;
    }
    interface TypeParameterDeclaration extends Declaration {
        name: Identifier;
        constraint?: TypeNode;
        expression?: Expression;
    }
    interface SignatureDeclaration extends Declaration {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type?: TypeNode;
    }
    interface VariableDeclaration extends Declaration {
        parent?: VariableDeclarationList;
        name: Identifier | BindingPattern;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface VariableDeclarationList extends Node {
        declarations: NodeArray<VariableDeclaration>;
    }
    interface ParameterDeclaration extends Declaration {
        dotDotDotToken?: Node;
        name: Identifier | BindingPattern;
        questionToken?: Node;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface BindingElement extends Declaration {
        propertyName?: Identifier;
        dotDotDotToken?: Node;
        name: Identifier | BindingPattern;
        initializer?: Expression;
    }
    interface PropertyDeclaration extends Declaration, ClassElement {
        name: DeclarationName;
        questionToken?: Node;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface ObjectLiteralElement extends Declaration {
        _objectLiteralBrandBrand: any;
    }
    interface PropertyAssignment extends ObjectLiteralElement {
        _propertyAssignmentBrand: any;
        name: DeclarationName;
        questionToken?: Node;
        initializer: Expression;
    }
    interface ShorthandPropertyAssignment extends ObjectLiteralElement {
        name: Identifier;
        questionToken?: Node;
    }
    interface VariableLikeDeclaration extends Declaration {
        propertyName?: Identifier;
        dotDotDotToken?: Node;
        name: DeclarationName;
        questionToken?: Node;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface BindingPattern extends Node {
        elements: NodeArray<BindingElement>;
    }
    /**
     * Several node kinds share function-like features such as a signature,
     * a name, and a body. These nodes should extend FunctionLikeDeclaration.
     * Examples:
     *  FunctionDeclaration
     *  MethodDeclaration
     *  AccessorDeclaration
     */
    interface FunctionLikeDeclaration extends SignatureDeclaration {
        _functionLikeDeclarationBrand: any;
        asteriskToken?: Node;
        questionToken?: Node;
        body?: Block | Expression;
    }
    interface FunctionDeclaration extends FunctionLikeDeclaration, Statement {
        name?: Identifier;
        body?: Block;
    }
    interface MethodDeclaration extends FunctionLikeDeclaration, ClassElement, ObjectLiteralElement {
        body?: Block;
    }
    interface ConstructorDeclaration extends FunctionLikeDeclaration, ClassElement {
        body?: Block;
    }
    interface SemicolonClassElement extends ClassElement {
        _semicolonClassElementBrand: any;
    }
    interface AccessorDeclaration extends FunctionLikeDeclaration, ClassElement, ObjectLiteralElement {
        _accessorDeclarationBrand: any;
        body: Block;
    }
    interface IndexSignatureDeclaration extends SignatureDeclaration, ClassElement {
        _indexSignatureDeclarationBrand: any;
    }
    interface TypeNode extends Node {
        _typeNodeBrand: any;
    }
    interface FunctionOrConstructorTypeNode extends TypeNode, SignatureDeclaration {
        _functionOrConstructorTypeNodeBrand: any;
    }
    interface TypeReferenceNode extends TypeNode {
        typeName: EntityName;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface TypeQueryNode extends TypeNode {
        exprName: EntityName;
    }
    interface TypeLiteralNode extends TypeNode, Declaration {
        members: NodeArray<Node>;
    }
    interface ArrayTypeNode extends TypeNode {
        elementType: TypeNode;
    }
    interface TupleTypeNode extends TypeNode {
        elementTypes: NodeArray<TypeNode>;
    }
    interface UnionTypeNode extends TypeNode {
        types: NodeArray<TypeNode>;
    }
    interface ParenthesizedTypeNode extends TypeNode {
        type: TypeNode;
    }
    interface StringLiteralTypeNode extends LiteralExpression, TypeNode {
    }
    interface Expression extends Node {
        _expressionBrand: any;
        contextualType?: Type;
    }
    interface UnaryExpression extends Expression {
        _unaryExpressionBrand: any;
    }
    interface PrefixUnaryExpression extends UnaryExpression {
        operator: SyntaxKind;
        operand: UnaryExpression;
    }
    interface PostfixUnaryExpression extends PostfixExpression {
        operand: LeftHandSideExpression;
        operator: SyntaxKind;
    }
    interface PostfixExpression extends UnaryExpression {
        _postfixExpressionBrand: any;
    }
    interface LeftHandSideExpression extends PostfixExpression {
        _leftHandSideExpressionBrand: any;
    }
    interface MemberExpression extends LeftHandSideExpression {
        _memberExpressionBrand: any;
    }
    interface PrimaryExpression extends MemberExpression {
        _primaryExpressionBrand: any;
    }
    interface DeleteExpression extends UnaryExpression {
        expression: UnaryExpression;
    }
    interface TypeOfExpression extends UnaryExpression {
        expression: UnaryExpression;
    }
    interface VoidExpression extends UnaryExpression {
        expression: UnaryExpression;
    }
    interface YieldExpression extends Expression {
        asteriskToken?: Node;
        expression: Expression;
    }
    interface BinaryExpression extends Expression {
        left: Expression;
        operatorToken: Node;
        right: Expression;
    }
    interface ConditionalExpression extends Expression {
        condition: Expression;
        questionToken: Node;
        whenTrue: Expression;
        colonToken: Node;
        whenFalse: Expression;
    }
    interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclaration {
        name?: Identifier;
        body: Block | Expression;
    }
    interface ArrowFunction extends Expression, FunctionLikeDeclaration {
        equalsGreaterThanToken: Node;
    }
    interface LiteralExpression extends PrimaryExpression {
        text: string;
        isUnterminated?: boolean;
        hasExtendedUnicodeEscape?: boolean;
    }
    interface StringLiteralExpression extends LiteralExpression {
        _stringLiteralExpressionBrand: any;
    }
    interface TemplateExpression extends PrimaryExpression {
        head: LiteralExpression;
        templateSpans: NodeArray<TemplateSpan>;
    }
    interface TemplateSpan extends Node {
        expression: Expression;
        literal: LiteralExpression;
    }
    interface ParenthesizedExpression extends PrimaryExpression {
        expression: Expression;
    }
    interface ArrayLiteralExpression extends PrimaryExpression {
        elements: NodeArray<Expression>;
    }
    interface SpreadElementExpression extends Expression {
        expression: Expression;
    }
    interface ObjectLiteralExpression extends PrimaryExpression, Declaration {
        properties: NodeArray<ObjectLiteralElement>;
    }
    interface PropertyAccessExpression extends MemberExpression {
        expression: LeftHandSideExpression;
        dotToken: Node;
        name: Identifier;
    }
    interface ElementAccessExpression extends MemberExpression {
        expression: LeftHandSideExpression;
        argumentExpression?: Expression;
    }
    interface CallExpression extends LeftHandSideExpression {
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }
    interface HeritageClauseElement extends Node {
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface NewExpression extends CallExpression, PrimaryExpression {
    }
    interface TaggedTemplateExpression extends MemberExpression {
        tag: LeftHandSideExpression;
        template: LiteralExpression | TemplateExpression;
    }
    type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression;
    interface TypeAssertion extends UnaryExpression {
        type: TypeNode;
        expression: UnaryExpression;
    }
    interface Statement extends Node, ModuleElement {
        _statementBrand: any;
    }
    interface Block extends Statement {
        statements: NodeArray<Statement>;
    }
    interface VariableStatement extends Statement {
        declarationList: VariableDeclarationList;
    }
    interface ExpressionStatement extends Statement {
        expression: Expression;
    }
    interface IfStatement extends Statement {
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }
    interface IterationStatement extends Statement {
        statement: Statement;
    }
    interface DoStatement extends IterationStatement {
        expression: Expression;
    }
    interface WhileStatement extends IterationStatement {
        expression: Expression;
    }
    interface ForStatement extends IterationStatement {
        initializer?: VariableDeclarationList | Expression;
        condition?: Expression;
        iterator?: Expression;
    }
    interface ForInStatement extends IterationStatement {
        initializer: VariableDeclarationList | Expression;
        expression: Expression;
    }
    interface ForOfStatement extends IterationStatement {
        initializer: VariableDeclarationList | Expression;
        expression: Expression;
    }
    interface BreakOrContinueStatement extends Statement {
        label?: Identifier;
    }
    interface ReturnStatement extends Statement {
        expression?: Expression;
    }
    interface WithStatement extends Statement {
        expression: Expression;
        statement: Statement;
    }
    interface SwitchStatement extends Statement {
        expression: Expression;
        caseBlock: CaseBlock;
    }
    interface CaseBlock extends Node {
        clauses: NodeArray<CaseOrDefaultClause>;
    }
    interface CaseClause extends Node {
        expression?: Expression;
        statements: NodeArray<Statement>;
    }
    interface DefaultClause extends Node {
        statements: NodeArray<Statement>;
    }
    type CaseOrDefaultClause = CaseClause | DefaultClause;
    interface LabeledStatement extends Statement {
        label: Identifier;
        statement: Statement;
    }
    interface ThrowStatement extends Statement {
        expression: Expression;
    }
    interface TryStatement extends Statement {
        tryBlock: Block;
        catchClause?: CatchClause;
        finallyBlock?: Block;
    }
    interface CatchClause extends Node {
        variableDeclaration: VariableDeclaration;
        block: Block;
    }
    interface ModuleElement extends Node {
        _moduleElementBrand: any;
    }
    interface ClassLikeDeclaration extends Declaration {
        name?: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<ClassElement>;
    }
    interface ClassDeclaration extends ClassLikeDeclaration, Statement {
    }
    interface ClassExpression extends ClassLikeDeclaration, PrimaryExpression {
    }
    interface ClassElement extends Declaration {
        _classElementBrand: any;
    }
    interface InterfaceDeclaration extends Declaration, ModuleElement {
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<Declaration>;
    }
    interface HeritageClause extends Node {
        token: SyntaxKind;
        types?: NodeArray<HeritageClauseElement>;
    }
    interface TypeAliasDeclaration extends Declaration, ModuleElement {
        name: Identifier;
        type: TypeNode;
    }
    interface EnumMember extends Declaration {
        name: DeclarationName;
        initializer?: Expression;
    }
    interface EnumDeclaration extends Declaration, ModuleElement {
        name: Identifier;
        members: NodeArray<EnumMember>;
    }
    interface ModuleDeclaration extends Declaration, ModuleElement {
        name: Identifier | LiteralExpression;
        body: ModuleBlock | ModuleDeclaration;
    }
    interface ModuleBlock extends Node, ModuleElement {
        statements: NodeArray<ModuleElement>;
    }
    interface ImportEqualsDeclaration extends Declaration, ModuleElement {
        name: Identifier;
        moduleReference: EntityName | ExternalModuleReference;
    }
    interface ExternalModuleReference extends Node {
        expression?: Expression;
    }
    interface ImportDeclaration extends ModuleElement {
        importClause?: ImportClause;
        moduleSpecifier: Expression;
    }
    interface ImportClause extends Declaration {
        name?: Identifier;
        namedBindings?: NamespaceImport | NamedImports;
    }
    interface NamespaceImport extends Declaration {
        name: Identifier;
    }
    interface ExportDeclaration extends Declaration, ModuleElement {
        exportClause?: NamedExports;
        moduleSpecifier?: Expression;
    }
    interface NamedImportsOrExports extends Node {
        elements: NodeArray<ImportOrExportSpecifier>;
    }
    type NamedImports = NamedImportsOrExports;
    type NamedExports = NamedImportsOrExports;
    interface ImportOrExportSpecifier extends Declaration {
        propertyName?: Identifier;
        name: Identifier;
    }
    type ImportSpecifier = ImportOrExportSpecifier;
    type ExportSpecifier = ImportOrExportSpecifier;
    interface ExportAssignment extends Declaration, ModuleElement {
        isExportEquals?: boolean;
        expression: Expression;
    }
    interface FileReference extends TextRange {
        fileName: string;
    }
    interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
        kind: SyntaxKind;
    }
    interface SourceFile extends Declaration {
        statements: NodeArray<ModuleElement>;
        endOfFileToken: Node;
        fileName: string;
        text: string;
        amdDependencies: {
            path: string;
            name: string;
        }[];
        amdModuleName: string;
        referencedFiles: FileReference[];
        hasNoDefaultLib: boolean;
        languageVersion: ScriptTarget;
    }
    interface ScriptReferenceHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile;
        getCurrentDirectory(): string;
    }
    interface WriteFileCallback {
        (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void): void;
    }
    interface Program extends ScriptReferenceHost {
        /**
         * Get a list of files in the program
         */
        getSourceFiles(): SourceFile[];
        /**
         * Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
         * the JavaScript and declaration files will be produced for all the files in this program.
         * If targetSourceFile is specified, then only the JavaScript and declaration for that
         * specific file will be generated.
         *
         * If writeFile is not specified then the writeFile callback from the compiler host will be
         * used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
         * will be invoked when writing the JavaScript and declaration files.
         */
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback): EmitResult;
        getSyntacticDiagnostics(sourceFile?: SourceFile): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getSemanticDiagnostics(sourceFile?: SourceFile): Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile): Diagnostic[];
        /**
         * Gets a type checker that can be used to semantically analyze source fils in the program.
         */
        getTypeChecker(): TypeChecker;
    }
    interface SourceMapSpan {
        /** Line number in the .js file. */
        emittedLine: number;
        /** Column number in the .js file. */
        emittedColumn: number;
        /** Line number in the .ts file. */
        sourceLine: number;
        /** Column number in the .ts file. */
        sourceColumn: number;
        /** Optional name (index into names array) associated with this span. */
        nameIndex?: number;
        /** .ts file (index into sources array) associated with this span */
        sourceIndex: number;
    }
    interface SourceMapData {
        sourceMapFilePath: string;
        jsSourceMappingURL: string;
        sourceMapFile: string;
        sourceMapSourceRoot: string;
        sourceMapSources: string[];
        inputSourceFileNames: string[];
        sourceMapNames?: string[];
        sourceMapMappings: string;
        sourceMapDecodedMappings: SourceMapSpan[];
    }
    /** Return code used by getEmitOutput function to indicate status of the function */
    enum ExitStatus {
        Success = 0,
        DiagnosticsPresent_OutputsSkipped = 1,
        DiagnosticsPresent_OutputsGenerated = 2,
    }
    interface EmitResult {
        emitSkipped: boolean;
        diagnostics: Diagnostic[];
    }
    interface TypeCheckerHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFiles(): SourceFile[];
        getSourceFile(fileName: string): SourceFile;
    }
    interface TypeChecker {
        getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propertyName: string): Symbol;
        getSignaturesOfType(type: Type, kind: SignatureKind): Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type;
        getReturnTypeOfSignature(signature: Signature): Type;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolAtLocation(node: Node): Symbol;
        getShorthandAssignmentValueSymbol(location: Node): Symbol;
        getTypeAtLocation(node: Node): Type;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string;
        getSymbolDisplayBuilder(): SymbolDisplayBuilder;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        getRootSymbols(symbol: Symbol): Symbol[];
        getContextualType(node: Expression): Type;
        getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[]): Signature;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature;
        isImplementationOfOverload(node: FunctionLikeDeclaration): boolean;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): number;
        isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName, propertyName: string): boolean;
        getAliasedSymbol(symbol: Symbol): Symbol;
        getExportsOfModule(moduleSymbol: Symbol): Symbol[];
    }
    interface SymbolDisplayBuilder {
        buildTypeDisplay(type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildSymbolDisplay(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): void;
        buildSignatureDisplay(signatures: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildParameterDisplay(parameter: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplay(tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplayFromSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaraiton?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForParametersAndDelimiters(parameters: Symbol[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForTypeParametersAndDelimiters(typeParameters: TypeParameter[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildReturnTypeDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
    }
    interface SymbolWriter {
        writeKeyword(text: string): void;
        writeOperator(text: string): void;
        writePunctuation(text: string): void;
        writeSpace(text: string): void;
        writeStringLiteral(text: string): void;
        writeParameter(text: string): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;
        trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void;
    }
    const enum TypeFormatFlags {
        None = 0,
        WriteArrayAsGenericType = 1,
        UseTypeOfFunction = 2,
        NoTruncation = 4,
        WriteArrowStyleSignature = 8,
        WriteOwnNameForAnyLike = 16,
        WriteTypeArgumentsOfSignature = 32,
        InElementType = 64,
        UseFullyQualifiedType = 128,
    }
    const enum SymbolFormatFlags {
        None = 0,
        WriteTypeParametersOrArguments = 1,
        UseOnlyExternalAliasing = 2,
    }
    const enum SymbolFlags {
        FunctionScopedVariable = 1,
        BlockScopedVariable = 2,
        Property = 4,
        EnumMember = 8,
        Function = 16,
        Class = 32,
        Interface = 64,
        ConstEnum = 128,
        RegularEnum = 256,
        ValueModule = 512,
        NamespaceModule = 1024,
        TypeLiteral = 2048,
        ObjectLiteral = 4096,
        Method = 8192,
        Constructor = 16384,
        GetAccessor = 32768,
        SetAccessor = 65536,
        Signature = 131072,
        TypeParameter = 262144,
        TypeAlias = 524288,
        ExportValue = 1048576,
        ExportType = 2097152,
        ExportNamespace = 4194304,
        Alias = 8388608,
        Instantiated = 16777216,
        Merged = 33554432,
        Transient = 67108864,
        Prototype = 134217728,
        UnionProperty = 268435456,
        Optional = 536870912,
        ExportStar = 1073741824,
        Enum = 384,
        Variable = 3,
        Value = 107455,
        Type = 793056,
        Namespace = 1536,
        Module = 1536,
        Accessor = 98304,
        FunctionScopedVariableExcludes = 107454,
        BlockScopedVariableExcludes = 107455,
        ParameterExcludes = 107455,
        PropertyExcludes = 107455,
        EnumMemberExcludes = 107455,
        FunctionExcludes = 106927,
        ClassExcludes = 899583,
        InterfaceExcludes = 792992,
        RegularEnumExcludes = 899327,
        ConstEnumExcludes = 899967,
        ValueModuleExcludes = 106639,
        NamespaceModuleExcludes = 0,
        MethodExcludes = 99263,
        GetAccessorExcludes = 41919,
        SetAccessorExcludes = 74687,
        TypeParameterExcludes = 530912,
        TypeAliasExcludes = 793056,
        AliasExcludes = 8388608,
        ModuleMember = 8914931,
        ExportHasLocal = 944,
        HasLocals = 255504,
        HasExports = 1952,
        HasMembers = 6240,
        IsContainer = 262128,
        PropertyOrAccessor = 98308,
        Export = 7340032,
    }
    interface Symbol {
        flags: SymbolFlags;
        name: string;
        declarations?: Declaration[];
        members?: SymbolTable;
        exports?: SymbolTable;
        valueDeclaration?: Declaration;
    }
    interface SymbolTable {
        [index: string]: Symbol;
    }
    const enum TypeFlags {
        Any = 1,
        String = 2,
        Number = 4,
        Boolean = 8,
        Void = 16,
        Undefined = 32,
        Null = 64,
        Enum = 128,
        StringLiteral = 256,
        TypeParameter = 512,
        Class = 1024,
        Interface = 2048,
        Reference = 4096,
        Tuple = 8192,
        Union = 16384,
        Anonymous = 32768,
        ObjectLiteral = 131072,
        ESSymbol = 1048576,
        StringLike = 258,
        NumberLike = 132,
        ObjectType = 48128,
    }
    interface Type {
        flags: TypeFlags;
        symbol?: Symbol;
    }
    interface StringLiteralType extends Type {
        text: string;
    }
    interface ObjectType extends Type {
    }
    interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[];
        baseTypes: ObjectType[];
        declaredProperties: Symbol[];
        declaredCallSignatures: Signature[];
        declaredConstructSignatures: Signature[];
        declaredStringIndexType: Type;
        declaredNumberIndexType: Type;
    }
    interface TypeReference extends ObjectType {
        target: GenericType;
        typeArguments: Type[];
    }
    interface GenericType extends InterfaceType, TypeReference {
    }
    interface TupleType extends ObjectType {
        elementTypes: Type[];
        baseArrayType: TypeReference;
    }
    interface UnionType extends Type {
        types: Type[];
    }
    interface TypeParameter extends Type {
        constraint: Type;
    }
    const enum SignatureKind {
        Call = 0,
        Construct = 1,
    }
    interface Signature {
        declaration: SignatureDeclaration;
        typeParameters: TypeParameter[];
        parameters: Symbol[];
    }
    const enum IndexKind {
        String = 0,
        Number = 1,
    }
    interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
    }
    /**
     * A linked list of formatted diagnostic messages to be used as part of a multiline message.
     * It is built from the bottom up, leaving the head to be the "main" diagnostic.
     * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
     * the difference is that messages are all preformatted in DMC.
     */
    interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain;
    }
    interface Diagnostic {
        file: SourceFile;
        start: number;
        length: number;
        messageText: string | DiagnosticMessageChain;
        category: DiagnosticCategory;
        code: number;
    }
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Message = 2,
    }
    interface CompilerOptions {
        allowNonTsExtensions?: boolean;
        charset?: string;
        declaration?: boolean;
        diagnostics?: boolean;
        emitBOM?: boolean;
        help?: boolean;
        listFiles?: boolean;
        locale?: string;
        mapRoot?: string;
        module?: ModuleKind;
        noEmit?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noImplicitAny?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        preserveConstEnums?: boolean;
        project?: string;
        removeComments?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        suppressImplicitAnyIndexErrors?: boolean;
        target?: ScriptTarget;
        version?: boolean;
        watch?: boolean;
        separateCompilation?: boolean;
        emitDecoratorMetadata?: boolean;
        [option: string]: string | number | boolean;
    }
    const enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
    }
    interface LineAndCharacter {
        line: number;
        character: number;
    }
    const enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
        ES6 = 2,
        Latest = 2,
    }
    interface ParsedCommandLine {
        options: CompilerOptions;
        fileNames: string[];
        errors: Diagnostic[];
    }
    interface CancellationToken {
        isCancellationRequested(): boolean;
    }
    interface CompilerHost {
        getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getDefaultLibFileName(options: CompilerOptions): string;
        getCancellationToken?(): CancellationToken;
        writeFile: WriteFileCallback;
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
    }
    interface TextSpan {
        start: number;
        length: number;
    }
    interface TextChangeRange {
        span: TextSpan;
        newLength: number;
    }
}
declare module ts {
    interface System {
        args: string[];
        newLine: string;
        useCaseSensitiveFileNames: boolean;
        write(s: string): void;
        readFile(path: string, encoding?: string): string;
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void;
        watchFile?(path: string, callback: (path: string) => void): FileWatcher;
        resolvePath(path: string): string;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        createDirectory(path: string): void;
        getExecutingFilePath(): string;
        getCurrentDirectory(): string;
        readDirectory(path: string, extension?: string): string[];
        getMemoryUsage?(): number;
        exit(exitCode?: number): void;
    }
    interface FileWatcher {
        close(): void;
    }
    var sys: System;
}
declare module ts {
    var Diagnostics: {
        Unterminated_string_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Identifier_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_file_cannot_have_a_reference_to_itself: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Trailing_comma_not_allowed: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Asterisk_Slash_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unexpected_token: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_rest_parameter_must_be_last_in_a_parameter_list: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_cannot_have_question_mark_and_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_required_parameter_cannot_follow_an_optional_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_cannot_have_a_rest_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_parameter_cannot_have_an_accessibility_modifier: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_parameter_cannot_have_a_question_mark: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_parameter_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_must_have_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_parameter_must_have_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_parameter_type_must_be_string_or_number: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_or_interface_declaration_can_only_have_one_extends_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_extends_clause_must_precede_an_implements_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_can_only_extend_a_single_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_declaration_can_only_have_one_implements_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Accessibility_modifier_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_modifier_must_precede_1_modifier: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_modifier_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_modifier_cannot_appear_on_a_class_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_interface_declaration_cannot_have_an_implements_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        super_must_be_followed_by_an_argument_list_or_member_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Only_ambient_modules_can_use_quoted_names: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Statements_are_not_allowed_in_ambient_contexts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_declare_modifier_cannot_be_used_in_an_already_ambient_context: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Initializers_are_not_allowed_in_ambient_contexts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_modifier_cannot_appear_on_a_module_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_declare_modifier_cannot_be_used_with_an_interface_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_rest_parameter_cannot_be_optional: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_rest_parameter_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_set_accessor_must_have_exactly_one_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_set_accessor_cannot_have_an_optional_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_set_accessor_parameter_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_set_accessor_cannot_have_rest_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_get_accessor_cannot_have_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Enum_member_must_have_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_export_assignment_cannot_be_used_in_an_internal_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Ambient_enum_elements_can_only_have_integer_literal_initializers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unexpected_token_A_constructor_method_accessor_or_property_was_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_declare_modifier_cannot_be_used_with_an_import_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Invalid_reference_directive_syntax: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_accessor_cannot_be_declared_in_an_ambient_context: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_modifier_cannot_appear_on_a_constructor_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_modifier_cannot_appear_on_a_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameters_cannot_appear_on_a_constructor_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_annotation_cannot_appear_on_a_constructor_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_accessor_cannot_have_type_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_set_accessor_cannot_have_a_return_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_signature_must_have_exactly_one_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_argument_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Invalid_use_of_0_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        with_statements_are_not_allowed_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        delete_cannot_be_called_on_an_identifier_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Jump_target_cannot_cross_function_boundary: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_return_statement_can_only_be_used_within_a_function_body: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Expression_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_member_cannot_be_declared_optional: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_label_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_object_literal_cannot_have_property_and_accessor_with_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_export_assignment_cannot_have_modifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Octal_literals_are_not_allowed_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_tuple_type_element_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Variable_declaration_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Hexadecimal_digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unexpected_end_of_text: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Invalid_character: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Declaration_or_statement_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Statement_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        case_or_default_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_or_signature_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Enum_member_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_reference_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Variable_declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Argument_expression_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_assignment_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Expression_or_comma_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_argument_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        String_literal_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Line_break_not_permitted_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        or_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Modifiers_not_permitted_on_index_signature_members: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Import_declarations_in_an_internal_module_cannot_reference_an_external_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_compile_external_modules_unless_the_module_flag_is_provided: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        File_name_0_differs_from_already_included_file_name_1_only_in_casing: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        var_let_or_const_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        let_declarations_are_only_available_when_targeting_ECMAScript_6_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        const_declarations_are_only_available_when_targeting_ECMAScript_6_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        const_declarations_must_be_initialized: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        const_declarations_can_only_be_declared_inside_a_block: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        let_declarations_can_only_be_declared_inside_a_block: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unterminated_template_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unterminated_regular_expression_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_object_member_cannot_be_declared_optional: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        yield_expression_must_be_contained_within_a_generator_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Computed_property_names_are_not_allowed_in_enums: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Computed_property_names_are_only_available_when_targeting_ECMAScript_6_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_comma_expression_is_not_allowed_in_a_computed_property_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        extends_clause_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        extends_clause_must_precede_implements_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Classes_can_only_extend_a_single_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        implements_clause_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Interface_declaration_cannot_have_implements_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Binary_digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Octal_digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unexpected_token_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_destructuring_pattern_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Array_element_destructuring_pattern_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_destructuring_declaration_must_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Destructuring_declarations_are_not_allowed_in_ambient_contexts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_implementation_cannot_be_declared_in_ambient_contexts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Modifiers_cannot_appear_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Merge_conflict_marker_encountered: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_rest_element_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_parameter_property_may_not_be_a_binding_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_import_declaration_cannot_have_modifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        External_module_0_has_no_default_export: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_export_declaration_cannot_have_modifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Export_declarations_are_not_permitted_in_an_internal_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Catch_clause_variable_name_must_be_an_identifier: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Catch_clause_variable_cannot_have_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Catch_clause_variable_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unterminated_Unicode_escape_sequence: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Line_terminator_not_permitted_before_arrow: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Import_assignment_cannot_be_used_when_targeting_ECMAScript_6_or_higher_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_or_import_d_from_mod_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Export_assignment_cannot_be_used_when_targeting_ECMAScript_6_or_higher_Consider_using_export_default_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_compile_external_modules_into_amd_or_commonjs_when_targeting_es6_or_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Decorators_are_only_available_when_targeting_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Decorators_are_not_valid_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_compile_non_external_modules_when_the_separateCompilation_flag_is_provided: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Ambient_const_enums_are_not_allowed_when_the_separateCompilation_flag_is_provided: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_declaration_without_the_default_modifier_must_have_a_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_identifier_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Static_members_cannot_reference_class_type_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Circular_definition_of_import_alias_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_find_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Module_0_has_no_exported_member_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        File_0_is_not_an_external_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_find_external_module_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_module_cannot_have_more_than_one_export_assignment: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_recursively_references_itself_as_a_base_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_may_only_extend_another_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_interface_may_only_extend_a_class_or_another_interface: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Constraint_of_a_type_parameter_cannot_reference_any_type_parameter_from_the_same_type_parameter_list: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Generic_type_0_requires_1_type_argument_s: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_is_not_generic: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Global_type_0_must_be_a_class_or_interface_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Global_type_0_must_have_1_type_parameter_s: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_find_global_type_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Named_property_0_of_types_1_and_2_are_not_identical: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Interface_0_cannot_simultaneously_extend_types_1_and_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Excessive_stack_depth_comparing_types_0_and_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_is_not_assignable_to_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_missing_in_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_private_in_type_1_but_not_in_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Types_of_property_0_are_incompatible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_optional_in_type_1_but_required_in_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Types_of_parameters_0_and_1_are_incompatible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Index_signature_is_missing_in_type_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Index_signatures_are_incompatible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        this_cannot_be_referenced_in_a_module_body: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        this_cannot_be_referenced_in_current_location: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        this_cannot_be_referenced_in_constructor_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        this_cannot_be_referenced_in_a_static_property_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        super_can_only_be_referenced_in_a_derived_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        super_cannot_be_referenced_in_constructor_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_does_not_exist_on_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_private_and_only_accessible_within_class_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_index_expression_argument_must_be_of_type_string_number_symbol_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_does_not_satisfy_the_constraint_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Supplied_parameters_do_not_match_any_signature_of_call_target: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Untyped_function_calls_may_not_accept_type_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_invoke_an_expression_whose_type_lacks_a_call_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Only_a_void_function_can_be_called_with_the_new_keyword: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Neither_type_0_nor_type_1_is_assignable_to_the_other: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        No_best_common_type_exists_among_return_expressions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value_or_consist_of_a_single_throw_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Invalid_left_hand_side_of_assignment_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Operator_0_cannot_be_applied_to_types_1_and_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_parameter_property_is_only_allowed_in_a_constructor_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_rest_parameter_must_be_of_an_array_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_cannot_be_referenced_in_its_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_string_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_number_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Constructors_for_derived_classes_must_contain_a_super_call: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_get_accessor_must_return_a_value_or_consist_of_a_single_throw_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Getter_and_setter_accessors_do_not_agree_in_visibility: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        get_and_set_accessor_must_have_the_same_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_signature_with_an_implementation_cannot_use_a_string_literal_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Overload_signatures_must_all_be_exported_or_not_exported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Overload_signatures_must_all_be_ambient_or_non_ambient: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Overload_signatures_must_all_be_public_private_or_protected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Overload_signatures_must_all_be_optional_or_required: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Function_overload_must_be_static: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Function_overload_must_not_be_static: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Function_implementation_name_must_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Constructor_implementation_is_missing: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Function_implementation_is_missing_or_not_immediately_following_the_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Multiple_constructor_implementations_are_not_allowed: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_function_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Overload_signature_is_not_compatible_with_function_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Invalid_left_hand_side_in_for_in_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Setters_cannot_return_a_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        All_symbols_within_a_with_block_will_be_resolved_to_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_of_type_1_is_not_assignable_to_string_index_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Numeric_index_type_0_is_not_assignable_to_string_index_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_0_incorrectly_extends_base_class_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_static_side_0_incorrectly_extends_base_class_static_side_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_name_0_in_extends_clause_does_not_reference_constructor_function_for_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_0_incorrectly_implements_interface_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_may_only_implement_another_class_or_interface: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Interface_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        All_declarations_of_an_interface_must_have_identical_type_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Interface_0_incorrectly_extends_interface_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Enum_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_module_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_module_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Ambient_external_modules_cannot_be_nested_in_other_modules: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Ambient_external_module_declaration_cannot_specify_relative_module_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Module_0_is_hidden_by_a_local_declaration_with_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Import_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Import_or_export_declaration_in_an_ambient_external_module_declaration_cannot_reference_external_module_through_relative_external_module_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Import_declaration_conflicts_with_local_declaration_of_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_an_external_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Types_have_separate_declarations_of_a_private_property_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_protected_in_type_1_but_public_in_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Block_scoped_variable_0_used_before_its_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Left_hand_side_of_assignment_expression_cannot_be_a_constant: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_redeclare_block_scoped_variable_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_enum_member_cannot_have_a_numeric_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_alias_0_circularly_references_itself: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_alias_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_AMD_module_cannot_have_multiple_name_assignments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_has_no_property_1_and_no_string_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_has_no_property_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_is_not_an_array_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_rest_element_must_be_last_in_an_array_destructuring_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_must_be_of_type_string_number_symbol_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        this_cannot_be_referenced_in_a_computed_property_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        super_cannot_be_referenced_in_a_computed_property_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_find_global_value_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_0_operator_cannot_be_applied_to_type_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_computed_property_name_of_the_form_0_must_be_of_type_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_6_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Enum_declarations_must_all_be_const_or_non_const: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        In_const_enum_declarations_member_initializer_must_be_constant_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_const_enum_member_can_only_be_accessed_using_a_string_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        const_enum_member_initializer_was_evaluated_to_a_non_finite_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_does_not_exist_on_const_enum_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Export_declaration_conflicts_with_exported_declaration_of_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_a_for_of_statement_cannot_be_a_previously_defined_constant: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_a_for_in_statement_cannot_be_a_previously_defined_constant: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Invalid_left_hand_side_in_for_of_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_iterator_must_have_a_next_method: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_redeclare_identifier_0_in_catch_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_0_is_not_an_array_type_or_a_string_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_arguments_object_cannot_be_referenced_in_an_arrow_function_Consider_using_a_standard_function_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        External_module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        External_module_0_uses_export_and_cannot_be_used_with_export_Asterisk: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Import_declaration_0_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Type_parameter_0_of_exported_function_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Implements_clause_of_exported_class_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Extends_clause_of_exported_class_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Exported_variable_0_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Exported_variable_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Public_static_property_0_of_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Public_property_0_of_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_of_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Return_type_of_exported_function_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_of_exported_function_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Exported_type_alias_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Default_export_of_the_module_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Loop_contains_block_scoped_variable_0_referenced_by_a_function_in_the_loop_This_is_only_supported_in_ECMAScript_6_or_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        The_current_host_does_not_support_the_0_option: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_find_the_common_subdirectory_path_for_the_input_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Cannot_read_file_0_Colon_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unsupported_file_encoding: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unknown_compiler_option_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Compiler_option_0_requires_a_value_of_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Could_not_write_file_0_Colon_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_mapRoot_cannot_be_specified_without_specifying_sourcemap_option: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_sourceRoot_cannot_be_specified_without_specifying_sourcemap_option: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_noEmit_cannot_be_specified_with_option_out_or_outDir: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_noEmit_cannot_be_specified_with_option_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_project_cannot_be_mixed_with_source_files_on_a_command_line: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_sourceMap_cannot_be_specified_with_option_separateCompilation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_declaration_cannot_be_specified_with_option_separateCompilation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_noEmitOnError_cannot_be_specified_with_option_separateCompilation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_out_cannot_be_specified_with_option_separateCompilation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Option_separateCompilation_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES6_or_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Concatenate_and_emit_output_to_single_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Generates_corresponding_d_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Watch_input_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Redirect_output_structure_to_the_directory: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Do_not_erase_const_enum_declarations_in_generated_code: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Do_not_emit_outputs_if_any_type_checking_errors_were_reported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Do_not_emit_comments_to_output: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Do_not_emit_outputs: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES6_experimental: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Specify_module_code_generation_Colon_commonjs_or_amd: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Print_this_message: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Print_the_compiler_s_version: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Compile_the_project_in_the_given_directory: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Syntax_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        options: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Examples_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Options_Colon: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Version_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Insert_command_line_options_and_files_from_a_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        File_change_detected_Starting_incremental_compilation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        KIND: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        FILE: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        VERSION: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        LOCATION: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        DIRECTORY: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Compilation_complete_Watching_for_file_changes: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Generates_corresponding_map_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Compiler_option_0_expects_an_argument: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unterminated_quoted_string_in_response_file_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Argument_for_module_option_must_be_commonjs_or_amd: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Argument_for_target_option_must_be_es3_es5_or_es6: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unsupported_locale_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Unable_to_open_file_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Corrupted_locale_file_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Raise_error_on_expressions_and_declarations_with_an_implied_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        File_0_not_found: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        File_0_must_have_extension_ts_or_d_ts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Do_not_emit_declarations_for_code_that_has_an_internal_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Preserve_new_lines_when_emitting_code: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Variable_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Parameter_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Member_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Index_signature_of_object_type_implicitly_has_an_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Object_literal_s_property_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Rest_parameter_0_implicitly_has_an_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_implicitly_has_type_any_because_it_is_referenced_directly_or_indirectly_in_its_own_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_implicitly_has_type_any_because_it_is_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        You_cannot_rename_this_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        import_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        export_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        type_parameter_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        implements_clauses_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        interface_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        module_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        type_aliases_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        _0_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        types_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        type_arguments_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        parameter_modifiers_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        property_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        enum_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        type_assertion_expressions_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        decorators_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        yield_expressions_are_not_currently_supported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Generators_are_not_currently_supported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clauses: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        class_expressions_are_not_currently_supported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
        class_declarations_are_only_supported_directly_inside_a_module_or_as_a_top_level_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
        };
    };
}
declare module ts {
    function tokenToString(t: SyntaxKind): string;
    function getPositionOfLineAndCharacter(sourceFile: SourceFile, line: number, character: number): number;
    function getLineAndCharacterOfPosition(sourceFile: SourceFile, position: number): LineAndCharacter;
    function isWhiteSpace(ch: number): boolean;
    function isLineBreak(ch: number): boolean;
    function getLeadingCommentRanges(text: string, pos: number): CommentRange[];
    function getTrailingCommentRanges(text: string, pos: number): CommentRange[];
    function isIdentifierStart(ch: number, languageVersion: ScriptTarget): boolean;
    function isIdentifierPart(ch: number, languageVersion: ScriptTarget): boolean;
}
declare module ts {
    function getNodeConstructor(kind: SyntaxKind): new () => Node;
    function createNode(kind: SyntaxKind): Node;
    function forEachChild<T>(node: Node, cbNode: (node: Node) => T, cbNodeArray?: (nodes: Node[]) => T): T;
    function modifierToFlag(token: SyntaxKind): NodeFlags;
    function updateSourceFile(sourceFile: SourceFile, newText: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    function isEvalOrArgumentsIdentifier(node: Node): boolean;
    function createSourceFile(fileName: string, sourceText: string, languageVersion: ScriptTarget, setParentNodes?: boolean): SourceFile;
    function isLeftHandSideExpression(expr: Expression): boolean;
    function isAssignmentOperator(token: SyntaxKind): boolean;
}
declare module ts {
    /** The version of the TypeScript compiler release */
    const version: string;
    function findConfigFile(searchPath: string): string;
    function createCompilerHost(options: CompilerOptions, setParentNodes?: boolean): CompilerHost;
    function getPreEmitDiagnostics(program: Program): Diagnostic[];
    function flattenDiagnosticMessageText(messageText: string | DiagnosticMessageChain, newLine: string): string;
    function createProgram(rootNames: string[], options: CompilerOptions, host?: CompilerHost): Program;
}
declare module ts {
    function parseCommandLine(commandLine: string[]): ParsedCommandLine;
    /**
      * Read tsconfig.json file
      * @param fileName The path to the config file
      */
    function readConfigFile(fileName: string): any;
    /**
      * Parse the contents of a config file (tsconfig.json).
      * @param json The contents of the config file to parse
      * @param basePath A root directory to resolve relative path entries in the config
      *    file to. e.g. outDir
      */
    function parseConfigFile(json: any, basePath?: string): ParsedCommandLine;
}
declare module ts {
    /** The version of the language service API */
    let servicesVersion: string;
    interface Node {
        getSourceFile(): SourceFile;
        getChildCount(sourceFile?: SourceFile): number;
        getChildAt(index: number, sourceFile?: SourceFile): Node;
        getChildren(sourceFile?: SourceFile): Node[];
        getStart(sourceFile?: SourceFile): number;
        getFullStart(): number;
        getEnd(): number;
        getWidth(sourceFile?: SourceFile): number;
        getFullWidth(): number;
        getLeadingTriviaWidth(sourceFile?: SourceFile): number;
        getFullText(sourceFile?: SourceFile): string;
        getText(sourceFile?: SourceFile): string;
        getFirstToken(sourceFile?: SourceFile): Node;
        getLastToken(sourceFile?: SourceFile): Node;
    }
    interface Symbol {
        getFlags(): SymbolFlags;
        getName(): string;
        getDeclarations(): Declaration[];
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface Type {
        getFlags(): TypeFlags;
        getSymbol(): Symbol;
        getProperties(): Symbol[];
        getProperty(propertyName: string): Symbol;
        getApparentProperties(): Symbol[];
        getCallSignatures(): Signature[];
        getConstructSignatures(): Signature[];
        getStringIndexType(): Type;
        getNumberIndexType(): Type;
    }
    interface Signature {
        getDeclaration(): SignatureDeclaration;
        getTypeParameters(): Type[];
        getParameters(): Symbol[];
        getReturnType(): Type;
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface SourceFile {
        getNamedDeclarations(): Declaration[];
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
        getLineStarts(): number[];
        getPositionOfLineAndCharacter(line: number, character: number): number;
        update(newText: string, textChangeRange: TextChangeRange): SourceFile;
    }
    /**
     * Represents an immutable snapshot of a script at a specified time.Once acquired, the
     * snapshot is observably immutable. i.e. the same calls with the same parameters will return
     * the same values.
     */
    interface IScriptSnapshot {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;
        /** Gets the length of this script snapshot. */
        getLength(): number;
        /**
         * Gets the TextChangeRange that describe how the text changed between this text and
         * an older version.  This information is used by the incremental parser to determine
         * what sections of the script need to be re-parsed.  'undefined' can be returned if the
         * change range cannot be determined.  However, in that case, incremental parsing will
         * not happen and the entire document will be re - parsed.
         */
        getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange;
    }
    module ScriptSnapshot {
        function fromString(text: string): IScriptSnapshot;
    }
    interface PreProcessedFileInfo {
        referencedFiles: FileReference[];
        importedFiles: FileReference[];
        isLibFile: boolean;
    }
    interface LanguageServiceHost {
        getCompilationSettings(): CompilerOptions;
        getNewLine?(): string;
        getScriptFileNames(): string[];
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): IScriptSnapshot;
        getLocalizedDiagnosticMessages?(): any;
        getCancellationToken?(): CancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        log?(s: string): void;
        trace?(s: string): void;
        error?(s: string): void;
    }
    interface LanguageService {
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): Diagnostic[];
        getSemanticDiagnostics(fileName: string): Diagnostic[];
        getCompilerOptionsDiagnostics(): Diagnostic[];
        getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        getSemanticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        getCompletionsAtPosition(fileName: string, position: number): CompletionInfo;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails;
        getQuickInfoAtPosition(fileName: string, position: number): QuickInfo;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan;
        getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan;
        getSignatureHelpItems(fileName: string, position: number): SignatureHelpItems;
        getRenameInfo(fileName: string, position: number): RenameInfo;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): RenameLocation[];
        getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        findReferences(fileName: string, position: number): ReferencedSymbol[];
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[];
        /** @deprecated */
        getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getNavigateToItems(searchValue: string, maxResultCount?: number): NavigateToItem[];
        getNavigationBarItems(fileName: string): NavigationBarItem[];
        getOutliningSpans(fileName: string): OutliningSpan[];
        getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
        getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions): number;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions): TextChange[];
        getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions): TextChange[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions): TextChange[];
        getEmitOutput(fileName: string): EmitOutput;
        getProgram(): Program;
        getSourceFile(fileName: string): SourceFile;
        dispose(): void;
    }
    interface ClassifiedSpan {
        textSpan: TextSpan;
        classificationType: string;
    }
    interface NavigationBarItem {
        text: string;
        kind: string;
        kindModifiers: string;
        spans: TextSpan[];
        childItems: NavigationBarItem[];
        indent: number;
        bolded: boolean;
        grayed: boolean;
    }
    interface TodoCommentDescriptor {
        text: string;
        priority: number;
    }
    interface TodoComment {
        descriptor: TodoCommentDescriptor;
        message: string;
        position: number;
    }
    class TextChange {
        span: TextSpan;
        newText: string;
    }
    interface RenameLocation {
        textSpan: TextSpan;
        fileName: string;
    }
    interface ReferenceEntry {
        textSpan: TextSpan;
        fileName: string;
        isWriteAccess: boolean;
    }
    interface DocumentHighlights {
        fileName: string;
        highlightSpans: HighlightSpan[];
    }
    module HighlightSpanKind {
        const none: string;
        const definition: string;
        const reference: string;
        const writtenReference: string;
    }
    interface HighlightSpan {
        textSpan: TextSpan;
        kind: string;
    }
    interface NavigateToItem {
        name: string;
        kind: string;
        kindModifiers: string;
        matchKind: string;
        isCaseSensitive: boolean;
        fileName: string;
        textSpan: TextSpan;
        containerName: string;
        containerKind: string;
    }
    interface EditorOptions {
        IndentSize: number;
        TabSize: number;
        NewLineCharacter: string;
        ConvertTabsToSpaces: boolean;
    }
    interface FormatCodeOptions extends EditorOptions {
        InsertSpaceAfterCommaDelimiter: boolean;
        InsertSpaceAfterSemicolonInForStatements: boolean;
        InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        PlaceOpenBraceOnNewLineForFunctions: boolean;
        PlaceOpenBraceOnNewLineForControlBlocks: boolean;
        [s: string]: boolean | number | string;
    }
    interface DefinitionInfo {
        fileName: string;
        textSpan: TextSpan;
        kind: string;
        name: string;
        containerKind: string;
        containerName: string;
    }
    interface ReferencedSymbol {
        definition: DefinitionInfo;
        references: ReferenceEntry[];
    }
    enum SymbolDisplayPartKind {
        aliasName = 0,
        className = 1,
        enumName = 2,
        fieldName = 3,
        interfaceName = 4,
        keyword = 5,
        lineBreak = 6,
        numericLiteral = 7,
        stringLiteral = 8,
        localName = 9,
        methodName = 10,
        moduleName = 11,
        operator = 12,
        parameterName = 13,
        propertyName = 14,
        punctuation = 15,
        space = 16,
        text = 17,
        typeParameterName = 18,
        enumMemberName = 19,
        functionName = 20,
        regularExpressionLiteral = 21,
    }
    interface SymbolDisplayPart {
        text: string;
        kind: string;
    }
    interface QuickInfo {
        kind: string;
        kindModifiers: string;
        textSpan: TextSpan;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface RenameInfo {
        canRename: boolean;
        localizedErrorMessage: string;
        displayName: string;
        fullDisplayName: string;
        kind: string;
        kindModifiers: string;
        triggerSpan: TextSpan;
    }
    interface SignatureHelpParameter {
        name: string;
        documentation: SymbolDisplayPart[];
        displayParts: SymbolDisplayPart[];
        isOptional: boolean;
    }
    /**
     * Represents a single signature to show in signature help.
     * The id is used for subsequent calls into the language service to ask questions about the
     * signature help item in the context of any documents that have been updated.  i.e. after
     * an edit has happened, while signature help is still active, the host can ask important
     * questions like 'what parameter is the user currently contained within?'.
     */
    interface SignatureHelpItem {
        isVariadic: boolean;
        prefixDisplayParts: SymbolDisplayPart[];
        suffixDisplayParts: SymbolDisplayPart[];
        separatorDisplayParts: SymbolDisplayPart[];
        parameters: SignatureHelpParameter[];
        documentation: SymbolDisplayPart[];
    }
    /**
     * Represents a set of signature help items, and the preferred item that should be selected.
     */
    interface SignatureHelpItems {
        items: SignatureHelpItem[];
        applicableSpan: TextSpan;
        selectedItemIndex: number;
        argumentIndex: number;
        argumentCount: number;
    }
    interface CompletionInfo {
        isMemberCompletion: boolean;
        isNewIdentifierLocation: boolean;
        entries: CompletionEntry[];
    }
    interface CompletionEntry {
        name: string;
        kind: string;
        kindModifiers: string;
        sortText: string;
    }
    interface CompletionEntryDetails {
        name: string;
        kind: string;
        kindModifiers: string;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface OutliningSpan {
        /** The span of the document to actually collapse. */
        textSpan: TextSpan;
        /** The span of the document to display when the user hovers over the collapsed span. */
        hintSpan: TextSpan;
        /** The text to display in the editor for the collapsed region. */
        bannerText: string;
        /**
          * Whether or not this region should be automatically collapsed when
          * the 'Collapse to Definitions' command is invoked.
          */
        autoCollapse: boolean;
    }
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitSkipped: boolean;
    }
    const enum OutputFileType {
        JavaScript = 0,
        SourceMap = 1,
        Declaration = 2,
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
    const enum EndOfLineState {
        Start = 0,
        InMultiLineCommentTrivia = 1,
        InSingleQuoteStringLiteral = 2,
        InDoubleQuoteStringLiteral = 3,
        InTemplateHeadOrNoSubstitutionTemplate = 4,
        InTemplateMiddleOrTail = 5,
        InTemplateSubstitutionPosition = 6,
    }
    enum TokenClass {
        Punctuation = 0,
        Keyword = 1,
        Operator = 2,
        Comment = 3,
        Whitespace = 4,
        Identifier = 5,
        NumberLiteral = 6,
        StringLiteral = 7,
        RegExpLiteral = 8,
    }
    interface ClassificationResult {
        finalLexState: EndOfLineState;
        entries: ClassificationInfo[];
    }
    interface ClassificationInfo {
        length: number;
        classification: TokenClass;
    }
    interface Classifier {
        /**
         * Gives lexical classifications of tokens on a line without any syntactic context.
         * For instance, a token consisting of the text 'string' can be either an identifier
         * named 'string' or the keyword 'string', however, because this classifier is not aware,
         * it relies on certain heuristics to give acceptable results. For classifications where
         * speed trumps accuracy, this function is preferable; however, for true accuracy, the
         * syntactic classifier is ideal. In fact, in certain editing scenarios, combining the
         * lexical, syntactic, and semantic classifiers may issue the best user experience.
         *
         * @param text                      The text of a line to classify.
         * @param lexState                  The state of the lexical classifier at the end of the previous line.
         * @param syntacticClassifierAbsent Whether the client is *not* using a syntactic classifier.
         *                                  If there is no syntactic classifier (syntacticClassifierAbsent=true),
         *                                  certain heuristics may be used in its place; however, if there is a
         *                                  syntactic classifier (syntacticClassifierAbsent=false), certain
         *                                  classifications which may be incorrectly categorized will be given
         *                                  back as Identifiers in order to allow the syntactic classifier to
         *                                  subsume the classification.
         */
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent: boolean): ClassificationResult;
    }
    /**
      * The document registry represents a store of SourceFile objects that can be shared between
      * multiple LanguageService instances. A LanguageService instance holds on the SourceFile (AST)
      * of files in the context.
      * SourceFile objects account for most of the memory usage by the language service. Sharing
      * the same DocumentRegistry instance between different instances of LanguageService allow
      * for more efficient memory utilization since all projects will share at least the library
      * file (lib.d.ts).
      *
      * A more advanced use of the document registry is to serialize sourceFile objects to disk
      * and re-hydrate them when needed.
      *
      * To create a default DocumentRegistry, use createDocumentRegistry to create one, and pass it
      * to all subsequent createLanguageService calls.
      */
    interface DocumentRegistry {
        /**
          * Request a stored SourceFile with a given fileName and compilationSettings.
          * The first call to acquire will call createLanguageServiceSourceFile to generate
          * the SourceFile if was not found in the registry.
          *
          * @param fileName The name of the file requested
          * @param compilationSettings Some compilation settings like target affects the
          * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
          * multiple copies of the same file for different compilation settings.
          * @parm scriptSnapshot Text of the file. Only used if the file was not found
          * in the registry and a new one was created.
          * @parm version Current version of the file. Only used if the file was not found
          * in the registry and a new one was created.
          */
        acquireDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string): SourceFile;
        /**
          * Request an updated version of an already existing SourceFile with a given fileName
          * and compilationSettings. The update will in-turn call updateLanguageServiceSourceFile
          * to get an updated SourceFile.
          *
          * @param fileName The name of the file requested
          * @param compilationSettings Some compilation settings like target affects the
          * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
          * multiple copies of the same file for different compilation settings.
          * @param scriptSnapshot Text of the file.
          * @param version Current version of the file.
          */
        updateDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string): SourceFile;
        /**
          * Informs the DocumentRegistry that a file is not needed any longer.
          *
          * Note: It is not allowed to call release on a SourceFile that was not acquired from
          * this registry originally.
          *
          * @param fileName The name of the file to be released
          * @param compilationSettings The compilation settings used to acquire the file
          */
        releaseDocument(fileName: string, compilationSettings: CompilerOptions): void;
    }
    module ScriptElementKind {
        const unknown: string;
        const warning: string;
        const keyword: string;
        const scriptElement: string;
        const moduleElement: string;
        const classElement: string;
        const interfaceElement: string;
        const typeElement: string;
        const enumElement: string;
        const variableElement: string;
        const localVariableElement: string;
        const functionElement: string;
        const localFunctionElement: string;
        const memberFunctionElement: string;
        const memberGetAccessorElement: string;
        const memberSetAccessorElement: string;
        const memberVariableElement: string;
        const constructorImplementationElement: string;
        const callSignatureElement: string;
        const indexSignatureElement: string;
        const constructSignatureElement: string;
        const parameterElement: string;
        const typeParameterElement: string;
        const primitiveType: string;
        const label: string;
        const alias: string;
        const constElement: string;
        const letElement: string;
    }
    module ScriptElementKindModifier {
        const none: string;
        const publicMemberModifier: string;
        const privateMemberModifier: string;
        const protectedMemberModifier: string;
        const exportedModifier: string;
        const ambientModifier: string;
        const staticModifier: string;
    }
    class ClassificationTypeNames {
        static comment: string;
        static identifier: string;
        static keyword: string;
        static numericLiteral: string;
        static operator: string;
        static stringLiteral: string;
        static whiteSpace: string;
        static text: string;
        static punctuation: string;
        static className: string;
        static enumName: string;
        static interfaceName: string;
        static moduleName: string;
        static typeParameterName: string;
        static typeAlias: string;
    }
    interface DisplayPartsSymbolWriter extends SymbolWriter {
        displayParts(): SymbolDisplayPart[];
    }
    function displayPartsToString(displayParts: SymbolDisplayPart[]): string;
    function getDefaultCompilerOptions(): CompilerOptions;
    class OperationCanceledException {
    }
    class CancellationTokenObject {
        private cancellationToken;
        static None: CancellationTokenObject;
        constructor(cancellationToken: CancellationToken);
        isCancellationRequested(): boolean;
        throwIfCancellationRequested(): void;
    }
    function transpile(input: string, compilerOptions?: CompilerOptions, fileName?: string, diagnostics?: Diagnostic[]): string;
    function createLanguageServiceSourceFile(fileName: string, scriptSnapshot: IScriptSnapshot, scriptTarget: ScriptTarget, version: string, setNodeParents: boolean): SourceFile;
    let disableIncrementalParsing: boolean;
    function updateLanguageServiceSourceFile(sourceFile: SourceFile, scriptSnapshot: IScriptSnapshot, version: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    function createDocumentRegistry(): DocumentRegistry;
    function preProcessFile(sourceText: string, readImportFiles?: boolean): PreProcessedFileInfo;
    function createLanguageService(host: LanguageServiceHost, documentRegistry?: DocumentRegistry): LanguageService;
    function createClassifier(): Classifier;
    /**
      * Get the path of the default library file (lib.d.ts) as distributed with the typescript
      * node package.
      * The functionality is not supported if the ts module is consumed outside of a node module.
      */
    function getDefaultLibFilePath(options: CompilerOptions): string;
}
